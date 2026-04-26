from django.db import models
from django.contrib.auth.models import AbstractUser
from django.conf import settings
from django.utils import timezone

class Baseuser(AbstractUser):
  mobile=models.CharField(max_length=12)
  is_varified=models.BooleanField(default=False)


  def __str__(self):
    return super().__str__()

class Otp(models.Model):
  user=models.ForeignKey(Baseuser,on_delete=models.CASCADE)
  otp=models.CharField(max_length=4)
  opt_created_at=models.DateTimeField(auto_now_add=True)


  def is_expired(self):
    return self.opt_created_at + timezone.timedelta(minutes=10)<timezone.now()
  
