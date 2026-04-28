from blogs.models import Hotel,hotelImages
from rest_framework import serializers

class Imagesserializer(serializers.ModelSerializer):
  class Meta:
    model=hotelImages
    fields=['images']

class HotelSerializer(serializers.ModelSerializer):
  images=Imagesserializer(many=True,read_only=True)
  final_price=serializers.SerializerMethodField()
  is_available=serializers.SerializerMethodField()
  discount=serializers.SerializerMethodField()

  class Meta:
    model=Hotel
    fields=['name','description','address','city','state','country','Thumbnail','price_per_night','is_available','offer','final_price','discount']


  def get_final_price(self):
    return self.offer_price()
  
  def get_is_available(self,obj):
   return "Avalaible" if obj.is_available() else "Booked"
  
  def get_discount(self):
    return self.discount_price()
  
  
  

  


