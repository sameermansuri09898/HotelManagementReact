from .models import Baseuser,Otp
from rest_framework import serializers

class Registrationsearlizer(serializers.ModelSerializer):
  confirm_password=serializers.CharField(write_only=True)

  class Meta:
    model=Baseuser
    fields=['username','first_name','last_name','email','password','confirm_password','mobile','is_varified']
    extra_kwargs={
      'password':{'write_only':True},
      'is_varified': {'read_only': True}
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
    otp_va=attrs.get('otp')

    try:
      user=Baseuser.objects.get(email=email)
    except Baseuser.DoesNotExist:
      raise serializers.ValidationError("User Does not Found")

    userobject=Otp.objects.filter(user=user).last()

    if userobject is None:
      raise serializers.ValidationError("Invalid Otp")

    if userobject.is_expired():
      raise serializers.ValidationError("Expired otp")

    if userobject.otp != otp_va:
      raise serializers.ValidationError("Otp is not valid")
    
    user.is_varified=True
    user.save()
    userobject.delete()

    return attrs


class ResendSerializer(serializers.Serializer):
   email=serializers.EmailField()

   def validate_email(self,value):
      email=value

      if not email:
         raise serializers.ValidationError("Email Address is Compulsory")
      
      try:
          user=Baseuser.objects.get(email=email)
      except Baseuser.DoesNotExist:
         raise serializers.ValidationError("User") 
       
      if user.is_varified:
         raise serializers.ValidationError("User is already Varified ")
      
      self.user=user

      return value

          
class LoginSerailizer(serializers.Serializer):
   username=serializers.CharField()
   password=serializers.CharField()

   class Meta:
      model=Baseuser
      fields='__all__'
      
class Chanagepasswordserializer(serializers.Serializer):
   email=serializers.EmailField()
   old_password=serializers.CharField()
   new_password=serializers.CharField()
   confirm_new_password=serializers.CharField()


   def validate(self,attrs):
      user=self.context['request'].user
      email=attrs.get('email')
      old_password=attrs.get('old_password')
      new_password=attrs.get('new_password')
      confirm_new_password=attrs.get('confirm_new_password')

      if new_password !=confirm_new_password:
         raise serializers.ValidationError("Confirm password does not matched")
      
      if not email or not old_password or not new_password or not confirm_new_password:
            raise serializers.ValidationError("All fields are required")
      

      user=Baseuser.objects.filter(email=email).first()

      if user is None:
         raise serializers.ValidationError("User is Invalid")
      
      if not user.check_password(old_password):
            raise serializers.ValidationError("Invalid old password")
      
      if new_password == old_password:
         raise serializers.ValidationError("new password is matched with old ")
      
      attrs['user']=user
      return attrs
   
   def save(self):
      user=self.validated_data['user']
      new_password=self.validate['new_password']

      user.make_password(new_password)
      user.save()
      return ({"mssg":"password chanage successfully "})



       