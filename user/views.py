from rest_framework.generics import (
    RetrieveAPIView
)

from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from .models import User

from .serializer import UserSerializer


class UserRetrieveAPIView(RetrieveAPIView):
    queryset = User.objects.filter(is_active=True)
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticated]

    def get(self, request, *args, **kwargs):
        serializer = self.get_serializer(instance=request.user)
        return Response(serializer.data)
