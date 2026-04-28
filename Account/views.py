from rest_framework.views import APIView
from rest_framework import viewsets
from rest_framework_simplejwt.authentication import JWTAuthentication
from .models import Baseuser,Otp
from .Accountserializer import Registrationsearlizer,Otpserializer,LoginSerailizer
from rest_framework.permissions import IsAuthenticated,AllowAny
from django.utils import timezone
from rest_framework import status
from rest_framework.response import Response
from .utils import genrate_otp,send_otp_email
from django.contrib.auth import authenticate
from rest_framework_simplejwt.tokens import RefreshToken


class RegistrationView(APIView):
  def post(sefl,request):
    serializer=Registrationsearlizer(data=request.data)
    serializer.is_valid(raise_exception=True)
    user=serializer.save()
    
    otp=genrate_otp()
    print(otp)

    Otp.objects.create(user=user,otp=otp)
    user.is_varified=False
    user.save()
    send_otp_email(user.email,str(otp))
    return Response({
      "otp":"otp send successfully to email",
      "mssg":"account is Created Successsfully",

    })

class OtpView(APIView):
  def post(self,request):
    serializers=Otpserializer(data=request.data)
    if serializers.is_valid():
      return Response({
        "mssgf":"Accoun is Varified now"
      })
    return Response({
      "mssg":"Not valid"
    })

class LoginView(APIView):
  def post(self,request):
    serializer=LoginSerailizer(data=request.data)
    if not serializer.is_valid():
      return Response({"mssg":"Credential is not Valid"})
    
    user=authenticate(username=serializer.validated_data['username'],password=serializer.validated_data['password'])
    if user is None:
      return Response({"mssg":"User is invalid"})
    
    if not user.is_varified:
      return Response({"user is not Varified"})
    
    if user:
      refresh=RefreshToken.for_user(user)

      return Response({
                    'refresh': str(refresh),
                    'access': str(refresh.access_token),
                })
    
class LogoutView(APIView):
  permission_classes=[IsAuthenticated]
  authentication_classes=[JWTAuthentication]

  def post(self,request):
    refresh_token=self.request.get('refresh')
    if not refresh_token:
      return Response(
       {"error": "Refresh token required"},
        status=status.HTTP_400_BAD_REQUEST
          )

    try:
         token = RefreshToken(refresh_token)
         token.blacklist()

         return Response(  
                {"msg": "Logout successful"},
                status=status.HTTP_200_OK
            )

    except Exception:
            return Response(
                {"error": "Invalid or expired token"},
                status=status.HTTP_400_BAD_REQUEST
            )