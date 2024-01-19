from rest_framework.generics import RetrieveUpdateDestroyAPIView
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from .models import divelog
from .serializers.common import DivelogSerializer
from divespot.serializers.common import DivespotSerializer
from .serializers.populated import DivelogListSerializer
from lib.views import OwnerListCreateView
from lib.permissions import IsOwnerOrReadOnly

#Path:/divelog/
#Methods: GET, POST
class DivelistCreateView(OwnerListCreateView):
  queryset = divelog.objects.select_related()
  permission_classes =[IsAuthenticatedOrReadOnly]

  def get_serializer_class(self):
    if self.request.method == 'GET':
      return DivelogListSerializer
    return DivelogSerializer

#Path:/divelog/:pk/
#Methods: GET, PUT, PATCH, DELETE
class DivelogDetailView(RetrieveUpdateDestroyAPIView):
  queryset = divelog.objects.select_related()
  permission_classes =[IsOwnerOrReadOnly]

  def get_serializer_class(self):
    if self.request.method =='GET':
      return DivelogListSerializer
    else:
      return DivelogSerializer
