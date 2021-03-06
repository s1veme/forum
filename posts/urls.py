from django.urls import path

from .views import (
    AnswerCreateAPIView,
    AnswerRetrieveAPIView,
    PostCreateAPIView,
    PostListAPIView,
    PostRetrieveAPIView,
)


urlpatterns = [
    path('create-question/', PostCreateAPIView.as_view()),
    path('questions/', PostListAPIView.as_view()),
    path('add-answer/', AnswerCreateAPIView.as_view()),
    path('question/<int:pk>', PostRetrieveAPIView.as_view()),
    path('question/answer/<int:pk>', AnswerRetrieveAPIView.as_view())
]
