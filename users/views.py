from rest_framework.generics import CreateAPIView
from .serializers.common import RegisterationSerializer
from django.contrib.auth import get_user_model

User = get_user_model() 

class RegisterView(CreateAPIView):
  queryset = User.objects.all()
  serializer_class = RegisterationSerializer