from django.urls import path

from rest_framework_jwt.views import obtain_jwt_token

from .views import UserRetrieveAPIView


urlpatterns = [
    path('token-create/', obtain_jwt_token, name='obtain_jwt_token'),
    path('profile/', UserRetrieveAPIView.as_view())
]
