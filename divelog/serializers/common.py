from rest_framework.serializers import ModelSerializer
from ..models import divelog

 
class DivelogSerializer(ModelSerializer):
  # divespot = DivespotSerializer()
  class Meta:
    model = divelog
    fields = '__all__'