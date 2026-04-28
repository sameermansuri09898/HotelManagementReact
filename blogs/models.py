from django.conf import settings
from django.db import models

class Hotel(models.Model):
    owner = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="hotels"
    )

    name = models.CharField(max_length=255)
    description = models.TextField(blank=True)

    address = models.CharField(max_length=500)
    city = models.CharField(max_length=100)
    state = models.CharField(max_length=100)
    country = models.CharField(max_length=100, default="India")
    Thumbnail=models.ImageField(upload_to='Hotel/thumbnail')

    price_per_night = models.DecimalField(max_digits=10, decimal_places=2)

    is_available = models.BooleanField(default=True)
    offer=models.DecimalField(max_digits=10,decimal_places=2)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["-created_at"]
        indexes = [
            models.Index(fields=["city"]),
            models.Index(fields=["price_per_night"]),
        ]

    def discount_price(self):
        return (self.price_per_night * self.offer)/100    

    def offer_price(self):
        return  self.price_per_night-self.discount_price()



    def is_available(self):
        return self.is_available    

    def __str__(self):
        return f"{self.name} - {self.city}"
    
class hotelImages(models.Model):
    hotel=models.ForeignKey(Hotel,on_delete=models.CASCADE, related_name='images')
    images=models.ImageField(upload_to='hotel/Images')

    def __str__(self):
        return super().__str__()
