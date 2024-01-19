
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from .models import divespot
from .serializers.common import DivespotSerializer

# Create your views here.

#Path:/divespot/
#Methods: GET, POST
class DivespotListCreateView(ListCreateAPIView):
  queryset = divespot.objects.select_related()
  serializer_class = DivespotSerializer
  permission_classes =[IsAuthenticatedOrReadOnly]




