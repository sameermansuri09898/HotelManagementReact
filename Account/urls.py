from django.urls import path
from rest_framework import routers
from .views import RegistrationView
router=routers.DefaultRouter()


urlpatterns = [
  path('Registration/',RegistrationView.as_view(),name='Registrationview'),
]