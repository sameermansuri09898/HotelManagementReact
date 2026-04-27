from .models import Baseuser,Otp
from rest_framework import serializers

class Registrationsearlizer(serializers.ModelSerializer):
  confirm_password=serializers.CharField(read_only=True)

  class Meta:
    model=Baseuser
    fields=['username','first_name','last_name','email','password','confirm_password','mobile','is_varified']
    extra_kwargs={
      'password':{'write_only':True}
    }

    def validate_email(self,value):
      if Baseuser.objects.filter(email=value).exists():
        raise serializers.ValidationError("email is already Exits")
      return value


    def validate_username(self,value):
      if Baseuser.objects.filter(username=value).exists():
        raise serializers.ValidationError("username is already exits")
      return value

    def validate(self,attrs):
      if attrs['password']!=attrs['confirm_password']:
        raise serializers.ValidationError("Confirm password does not matched")
      
      return attrs

    def create(self,validate_data):
      validate_data.pop('confirm_password')
      user=Baseuser.objects.create_user(**validate_data)

      return user

class Otpserializer(serializers.Serializer):
  email=serializers.EmailField()
  otp=serializers.CharField()

  def validate(self, attrs):
    email=attrs.get('email')
    otp=attrs.get('otp')

    try:
      user=Baseuser.objects.get(email=email)
    except Baseuser.DoesNotExist:
      raise serializers.ValidationError("User Does not Found")

    userobject=Otp.objects.filter(user=user).last()

    if userobject is None:
      raise serializers.ValidationError("Invalid Otp")

    if userobject.is_expired():
      raise serializers.ValidationError("Expired otp") 
    
    

