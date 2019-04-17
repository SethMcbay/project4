from django.db import models

# Create your models here.
from django.db import models

class Spot(models.Model):
    name = models.CharField(max_length=255)
    location = models.CharField(max_length=255)
    weather = models.CharField(max_length=255)

    def __str__(self):
        return self.name

class Shop(models.Model):
    address = models.CharField(max_length=255)
    rental = models.CharField(max_length=255)
    buy = models.CharField(max_length=400)
    spot = models.ForeignKey(Spot, on_delete=models.CASCADE, related_name='shop')

    def __str__(self):
        return self.address

class Notes(models.Model):
    comments = models.CharField(max_length=255)
    info = models.CharField(max_length=255)
    spot = models.ForeignKey(Spot, on_delete=models.CASCADE, related_name='notes') 
