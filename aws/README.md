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
(v-env) PS> python manage.py runserver

```