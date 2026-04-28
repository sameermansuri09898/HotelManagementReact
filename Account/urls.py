from django.urls import path
from rest_framework import routers
from .views import RegistrationView,OtpView,LoginView,LogoutView
router=routers.DefaultRouter()


urlpatterns = [
  path('Registration/',RegistrationView.as_view(),name='Registrationview'),
  path('otp-varification/',OtpView.as_view(),name='otpvarification'),
  path('login/',LoginView.as_view(),name='login'),
  path('logout/',LogoutView.as_view(),name='logout'),
]