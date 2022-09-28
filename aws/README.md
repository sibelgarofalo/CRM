# Django

Setup a virtual environment

```powershell
# create a virtual environment
PS> virtualenv v-env
PS> ./v-env/Scripts/activate

# install django if you don't have
(v-env) PS> pip install django
(v-env) PS> pip freeze

# create django if you don't have
(v-env) PS> cd src
(v-env) PS> django-admin startproject crmapi
(v-env) PS> cd crmapi
(v-env) PS\crmapi> python manage.py runserver


# freeze pip modules
(v-env) PS\crmapi> pip freeze > requirements.txt
(v-env) PS\crmapi> mkdir .ebextensions

```

Add the following `django.config` inside .ebextensions:

```json
option_settings:
  aws:elasticbeanstalk:container:python:
    WSGIPath: crmapi.wsgi:application
```

# Elastic Beanstalk

```powershell
# go out from virtualenv
(v-env) PS\crmapi> deactivate

# initialize EB
PS>eb init -p python-3.8 --region us-east-1 crmapi
# create environment
PS>eb create crmapi-env --cname sibel-crm-api
# get domain name
PS>eb status
# deploy
PS>eb deploy
# stop to save money
PS>eb terminate crmapi-env
```