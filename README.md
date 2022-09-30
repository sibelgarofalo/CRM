# Welcome to Sibel CRM

This project is a CRM (Contact Management System) built using React.js and Django Python. The application allows you to manage contacts, appointments, orders and products.

 > A demo is available [here on AWS](https://d1jmoh2n1qnkep.cloudfront.net)!

![Mockup](/docs/img-01.png)

This platform is built using:

 - React.JS v18
 - ANTD Components
 - Django and Python 3.8
 - AWS Services

The platform is deployed on AWS with the following architecture:

![AWS](/docs/img-02.png)

## Getting started

You can run the project locally, or, you can deploy the project to AWS Elastic Beanstalk and AWS S3 Bucket.

### Code locally

To code locally, you need two different `Terminal`, one to start the `front-end` and one to start the `back-end`.

#### Front-end

```powershell
PS> cd /src/web
PS> npm start

Compiled successfully!

You can now view web in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://192.168.0.16:3000
```

This command will start the React application on `http://localhost:3000`. Do not forget to run `npm install` if you just downloaded this repo.

#### Back-end

```powershell
PS> .\v-env\Scripts\activate
PS>(v-env) cd /src/crmapi
PS>(v-env) python .\manage.py migrate
PS>(v-env) python .\manage.py runserver

Watching for file changes with StatReloader
Performing system checks...

System check identified no issues (0 silenced).
September 25, 2022 - 14:22:40
Django version 4.1.1, using settings 'api.settings'
Starting development server at http://127.0.0.1:8000/
```

This command will run django on `http://localhost:8000/`. `migrate` is needed if you didn't configure Django previously.

### Deployment on AWS

 > This guide assume you have already an AWS account and you have already run the `aws configure` on your terminal, in order to be able to build infrastructure and push the code.

#### Front-end Cloud formation

The first part of the deployment is to use the Cloud formation stack, to create a new infrastructure. The Cloud formation stack requies a parameter `BucketName` as describe below

```powershell
PS> cd /aws
PS> aws cloudformation deploy 
   --template-file .\front-end.yaml 
   --stack-name sibel-crm-front 
   --parameter-overrides "BucketNameParameter=sibel-crm-s3"
```

The second script can be used to have CI/CD on your development machine. It will build React and push it to AWS S3 Bucket. It will output the URL of Cloudfront so that you can check what has been deployed.

```powershell
PS> .\publish-front.ps1 
   -stackname sibel-crm-front 
   -bucketname 925885294484-sibel-crm-s3

-> *** Deployment done ***
[
    {
        "OutputKey": "Domain",
        "OutputValue": "https://d1jmoh2n1qnkep.cloudfront.net",
        "Description": "Cloudfront Domain"
    }
]
```