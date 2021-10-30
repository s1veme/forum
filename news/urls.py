from django.urls import path

from .views import (
    NewsCreateAPIView,
    NewsListAPIView
)


urlpatterns = [
    path('', NewsListAPIView.as_view()),
    path('create', NewsCreateAPIView.as_view())
]
