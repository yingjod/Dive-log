from django.urls import path, include
from .views import DivespotListCreateView

urlpatterns = [
  path('',DivespotListCreateView.as_view())
]