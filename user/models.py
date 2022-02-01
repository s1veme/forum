from django.contrib.auth.models import (
    AbstractBaseUser,
    BaseUserManager,
    PermissionsMixin
)
from django.core.exceptions import ObjectDoesNotExist

from django.db import models
from imagekit.models.fields import ProcessedImageField
from imagekit.processors import ResizeToFill

from achievements.models import Achievement


class UserManager(BaseUserManager):
    def create_user(self, username, email, password=None):
        if username is None:
            raise TypeError('Users must have a username.')

        if email is None:
            raise TypeError('Users must have an email address.')

        user = self.model(username=username, email=self.normalize_email(email))
        user.set_password(password)
        user.save()

        return user

    def create_superuser(self, username, email, password):
        if password is None:
            raise TypeError('Superusers must have a password.')

        user = self.create_user(username, email, password)
        user.is_superuser = True
        user.is_staff = True
        user.save()

        return user

    def get_or_none(self, **kwargs):
        try:
            return self.get(**kwargs)
        except ObjectDoesNotExist:
            return None


class User(AbstractBaseUser, PermissionsMixin):
    username = models.CharField(
        'Имя',
        db_index=True,
        max_length=255,
        unique=True
    )
    email = models.EmailField(
        'Почта',
        db_index=True,
        unique=True
    )
    status = models.CharField(
        'Статус',
        max_length=50,
        blank=True
    )
    avatar = ProcessedImageField(
        format='PNG',
        processors=[
            ResizeToFill(50, 50)
        ],
        verbose_name='Аватарка пользователя',
        blank=True,
        null=True
    )
    achievements = models.ManyToManyField(
        Achievement
    )
    is_active = models.BooleanField(
        default=True
    )
    is_staff = models.BooleanField(
        default=False
    )
    created_at = models.DateTimeField(
        auto_now_add=True
    )
    updated_at = models.DateTimeField(
        auto_now=True
    )

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    objects = UserManager()

    def __str__(self):
        return self.email
