from rest_framework.serializers import ModelSerializer
from ..models import divespot

class DivespotSerializer(ModelSerializer):
  class Meta:
    model = divespot
    fields = '__all__'
