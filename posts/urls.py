from django.urls import path

from .views import (
    PostCreateAPIView,
    PostListAPIView
)


urlpatterns = [
    path('create-question/', PostCreateAPIView.as_view()),
    path('question/', PostListAPIView.as_view())
]
