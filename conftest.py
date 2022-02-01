import pytest
from django.contrib.auth import get_user_model
from pytest import fixture
from rest_framework.test import APIClient

User = get_user_model()


@fixture()
def user_data():
    return {
        'username': 'test',
        'password': 'testpassword',
        'email': 'testemail@gmail.com'
    }


@fixture()
def create_user(user_data):
    user = User.objects.create(**user_data)
    user.is_active = True
    user.save()

    return user


@pytest.fixture()
def api_client():
    return APIClient()
