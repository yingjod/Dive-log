from django.urls import path, include
from .views import DivelistCreateView, DivelogDetailView

urlpatterns = [
  path('',DivelistCreateView.as_view()),
  path('<int:pk>/', DivelogDetailView.as_view())
]