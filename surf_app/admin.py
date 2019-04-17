from django.contrib import admin
from .models import Spot, Shop, Notes

admin.site.register([Spot, Shop, Notes])
# Register your models here.
