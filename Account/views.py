from rest_framework.views import APIView
from rest_framework import viewsets
from rest_framework_simplejwt.authentication import JWTAuthentication
from .models import Baseuser
from .Accountserializer import Registrationsearlizer
from rest_framework.permissions import IsAuthenticated,AllowAny
from django.utils import timezone
from rest_framework import status
from rest_framework.response import Response

class RegistrationView(APIView):
  def post(sefl,request):
    serializer=Registrationsearlizer(data=request.data)
    serializer.is_valid(raise_exception=True)
    user=serializer.save()
    user.is_varified=True
    user.save()
    return Response({
      "mssg":"account is Created Successsfully",

    })
