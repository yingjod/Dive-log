from .common import DivelogSerializer
from users.serializers.common import UserSerializer


class DivelogListSerializer(DivelogSerializer):
  user =  UserSerializer()

