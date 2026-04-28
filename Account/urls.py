from django.urls import path
from rest_framework import routers
from .views import RegistrationView,OtpView,LoginView,LogoutView,otpresendview,changepasswordview

router=routers.DefaultRouter()


urlpatterns = [
  path('Registration/',RegistrationView.as_view(),name='Registrationview'),
  path('otp-varification/',OtpView.as_view(),name='otpvarification'),
  path('OtpResendView/',otpresendview.as_view(),name='OtpResendView'),
  path('change_password/',changepasswordview.as_view(),name='changepass'),
  path('login/',LoginView.as_view(),name='login'),
  path('logout/',LogoutView.as_view(),name='logout'),
]