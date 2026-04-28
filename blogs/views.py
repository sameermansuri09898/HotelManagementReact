from django.shortcuts import render
from rest_framework import viewsets
from rest_framework import generics
from rest_framework import status
from Account.models import Baseuser
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from .hotelserializer import Imagesserializer,HotelSerializer
from .models import Hotel,hotelImages
from django.db import transaction 


class hotelListing(viewsets.ModelViewSet):
  queryset=Hotel.objects.all()
  serializer_class=HotelSerializer

  # images store now crud on multiple images

  def create(self,request,*args,**kwargs):

    images=request.FILES.getlist('images')
    serializer=self.get_serializer(data=request.data)
    serializer.is_valid(raise_exception=True)

    with transaction.atomic():
       hotel=serializer.save(owner=request.user)
       for img in images:
         hotelImages.objects.create(
           hotel=hotel,
           images=img
         )   
    return Response(
            self.get_serializer(hotel).data,
            status=status.HTTP_201_CREATED
        )
    def update(self, request, *args, **kwargs):
        instance = self.get_object()
        images = request.FILES.getlist('images')

        serializer = self.get_serializer(instance, data=request.data)
        serializer.is_valid(raise_exception=True)
        hotel = serializer.save()

        if images:
            hotel.images.all().delete()
            for img in images:
                CarImage.objects.create(hotel=hotel, image=img)

        return Response(self.get_serializer(hotel).data, status=status.HTTP_200_OK)

    # ✅ PARTIAL UPDATE (PATCH)
    def partial_update(self, request, *args, **kwargs):
        instance = self.get_object()
        images = request.FILES.getlist('images')

        serializer = self.get_serializer(instance, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        hotel = serializer.save()

        if images:
            hotel.images.all().delete()
            for img in images:
                CarImage.objects.create(hotel=hotel, image=img)

        return Response(self.get_serializer(hote).data, status=status.HTTP_200_OK)

    # ✅ DELETE
    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        instance.delete()   
        return Response(status=status.HTTP_204_NO_CONTENT)  




