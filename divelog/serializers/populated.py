from .common import DivelogSerializer
from users.serializers.common import UserSerializer
from divespot.serializers.common import DivespotSerializer 


class DivelogListSerializer(DivelogSerializer):
  divespot = DivespotSerializer()
  user =  UserSerializer()

