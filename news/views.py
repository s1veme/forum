from rest_framework import status
from rest_framework.generics import (
    CreateAPIView,
    ListAPIView
)
from rest_framework.permissions import (
    AllowAny,
)

from django_filters import rest_framework as filters
from rest_framework.response import Response

from posts.permissions import IsAuthenticatedAndOwnerOrReadOnly

from .serializers import NewsSerializer

from .models import News


class NewsCreateAPIView(CreateAPIView):
    queryset = News.objects.filter(is_active=True)
    serializer_class = NewsSerializer
    permission_classes = [IsAuthenticatedAndOwnerOrReadOnly]

    def create(self, request, *args, **kwargs):
        data = request.data.copy()

        data['owner'] = request.user.id

        serializer = self.get_serializer(data=data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)

        return Response(serializer.data, status=status.HTTP_201_CREATED)


class NewsListAPIView(ListAPIView):
    queryset = News.objects.filter(is_active=True)
    serializer_class = NewsSerializer
    permission_classes = [AllowAny]
    filter_backends = (filters.DjangoFilterBackend,)
    filterset_fields = ('category',)
