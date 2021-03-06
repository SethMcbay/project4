from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets

from .serializer import SpotSerializer, ShopSerializer, NoteSerializer
from .models import Spot, Shop, Notes


class SpotView(viewsets.ModelViewSet):
    queryset = Spot.objects.all()
    serializer_class = SpotSerializer

class ShopView(viewsets.ModelViewSet):
    queryset = Shop.objects.all()
    serializer_class = ShopSerializer

class NotesView(viewsets.ModelViewSet):
    queryset = Notes.objects.all()
    serializer_class = NoteSerializer    
