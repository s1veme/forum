import pytest
from django.contrib.auth import get_user_model
from pytest import fixture
from rest_framework.test import APIClient

User = get_user_model()


@fixture()
def create_user():
    user = User.objects.create(
        username='test',
        password='testpassword',
        email='testemail@gmail.com'
    )
    user.is_active = True
    user.save()

    return user


@pytest.fixture()
def api_client():
    return APIClient()
