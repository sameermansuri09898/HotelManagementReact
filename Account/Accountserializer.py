from .models import Baseuser
from rest_framework import serializers

class Registrationsearlizer(serializers.ModelSerializer):
  confirm_password=serializers.CharField(read_only=True)

  class Meta:
    model=Baseuser
    fields=['username','first_name','last_name','email','password','confirm_password','mobile','is_varified']
    extra_kwargs={
      'password':{'write_only':True}
    }
  