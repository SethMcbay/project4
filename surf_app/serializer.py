from rest_framework import serializers

from .models import Spot, Shop, Notes


class SpotSerializer(serializers.ModelSerializer):
    class Meta:
        model = Spot
        fields = ('name', 'location', 'weather', 'spot')

class ShopSerializer(serializers.ModelSerializer):
    shop = ShopSerializer(many=True, read_only=True)
    class Meta:
        model = Shop
        fields = ('address', 'rental', 'buy', 'shop')

class NoteSerializer(serializers.ModelSerializer):
    note = NoteSerializer(many=True, read_only=True)
    class Meta:
        model = Notes
        fields = ('comments', 'info', 'note')        