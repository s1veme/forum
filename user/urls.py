from django.urls import path

from rest_framework_jwt.views import obtain_jwt_token

from .views import UserRetrieveAPIView, UserUpdateAPIView

urlpatterns = [
    path('token-create/', obtain_jwt_token, name='obtain_jwt_token'),
    path('profile/', UserRetrieveAPIView.as_view()),
    path('update/', UserUpdateAPIView.as_view(), name='user-update')
]
