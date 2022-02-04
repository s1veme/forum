from rest_framework import status
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
        if user_id := request.query_params.get('id'):
            user = User.objects.filter(id=user_id).first()
            if not user:
                return Response('User does not exist', status=status.HTTP_404_NOT_FOUND)
            serializer = self.get_serializer(instance=user)
        else:
            serializer = self.get_serializer(instance=request.user)
        return Response(serializer.data)
