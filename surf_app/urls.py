from django.urls import path, include
from . import views

urlpatterns = [
]
from django.urls import path, include
from rest_framework import routers

from . import views

router = routers.DefaultRouter()
router.register('spot', views.SpotView)
router.register('shop', views.ShopView)
router.register('notes', views.NotesView)


urlpatterns = [
    path('', include(router.urls))
]