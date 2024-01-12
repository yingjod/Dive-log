from rest_framework.generics import ListCreateAPIView

class OwnerListCreateView(ListCreateAPIView):

  def perform_create(self, serializer):
      serializer.save(user=self.request.user)