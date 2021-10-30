from rest_framework.generics import (
    ListAPIView
)
from rest_framework.permissions import AllowAny

from django_filters import rest_framework as filters

from .serializers import NewsSerializer

from .models import News


class NewsListAPIView(ListAPIView):
    queryset = News.objects.filter(is_active=True)
    serializer_class = NewsSerializer
    permission_classes = [AllowAny]
    filter_backends = (filters.DjangoFilterBackend,)
    filterset_fields = ('category',)
