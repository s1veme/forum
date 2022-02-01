import pytest

from django.contrib.auth import get_user_model
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APIClient

User = get_user_model()

pytestmark = [
    pytest.mark.django_db
]


def test_create_user(user_data):
    api = APIClient(enforce_csrf_checks=True)

    assert User.objects.count() == 0

    url = reverse('user-list')
    response = api.post(url, user_data, format='json')
    content = response.json()

    assert response.status_code == status.HTTP_201_CREATED
    assert User.objects.count() == 1

    user = User.objects.get(id=content['id'])

    assert user.username == user_data['username']
    assert user.email == user_data['email']

    url = reverse('obtain_jwt_token')
    response = api.post(url, user_data, format='json')

    assert response.status_code == status.HTTP_200_OK

