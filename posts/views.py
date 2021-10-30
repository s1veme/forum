from rest_framework import status
from rest_framework.generics import (
    CreateAPIView,
    ListAPIView,
    RetrieveAPIView
)
from rest_framework.permissions import (
    IsAuthenticated,
    AllowAny
)
from rest_framework.response import Response

from django_filters import rest_framework as filters

from .models import (
    Answer,
    Post
)

from .serializers import (
    AnswerSerializer,
    PostSerializer
)


class PostCreateAPIView(CreateAPIView):
    queryset = Post.objects.filter(is_active=True)
    serializer_class = PostSerializer
    permission_classes = [IsAuthenticated]

    def create(self, request, *args, **kwargs):
        data = request.data.copy()

        data['owner'] = request.user.id

        serializer = self.get_serializer(data=data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)

        return Response(serializer.data, status=status.HTTP_201_CREATED)


class PostListAPIView(ListAPIView):
    queryset = Post.objects.filter(is_active=True)
    serializer_class = PostSerializer
    permission_classes = [AllowAny]
    filter_backends = (filters.DjangoFilterBackend,)
    filterset_fields = ('tags__name',)


class AnswerCreateAPIView(CreateAPIView):
    queryset = Answer.objects.filter(is_active=True)
    serializer_class = AnswerSerializer
    permission_classes = [IsAuthenticated]

    def create(self, request, *args, **kwargs):
        data = request.data.copy()

        data['owner'] = request.user.id

        serializer = self.get_serializer(data=data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)

        return Response(serializer.data, status=status.HTTP_201_CREATED)


class AnswerRetrieveAPIView(RetrieveAPIView):
    queryset = Answer.objects.filter(is_active=True)
    serializer_class = AnswerSerializer
    permission_classes = [AllowAny]
