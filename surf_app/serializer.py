from rest_framework import serializers

from .models import Spot, Shop, Notes




class NoteSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Notes
        fields = ('comments', 'info', 'note', 'id')        

class ShopSerializer(serializers.ModelSerializer):
    notes = NoteSerializer(many=True, read_only=True)
    class Meta:
        model = Shop
        fields = ('address', 'rental', 'buy', 'notes', 'id')


class SpotSerializer(serializers.ModelSerializer):
    shop = ShopSerializer(many=True, read_only=True)
    class Meta:
        model = Spot
        fields = ('name', 'location', 'shop', 'id')
