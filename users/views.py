from rest_framework.generics import CreateAPIView
from .serializers.common import RegisterationSerializer
from django.contrib.auth import get_user_model

from django.utils.translation import gettext_lazy as _
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

User = get_user_model() 

class RegisterView(CreateAPIView):
  queryset = User.objects.select_related()
  serializer_class = RegisterationSerializer

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    default_error_messages = {
        'no_active_account': _('email or password is incorrect!')
    }

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer
