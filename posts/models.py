from django.db import models

from django.contrib.auth import get_user_model

from taggit.managers import TaggableManager
from ckeditor_uploader.fields import RichTextUploadingField

User = get_user_model()


class Post(models.Model):
    title = models.CharField(
        max_length=240
    )
    content = RichTextUploadingField()
    owner = models.ForeignKey(
        User,
        on_delete=models.CASCADE
    )
    timestamp = models.DateTimeField(
        auto_now_add=True
    )
    tags = TaggableManager()
    is_active = models.BooleanField(
        default=True
    )

    def __str__(self):
        return self.title


class Answer(models.Model):
    owner = models.ForeignKey(
        User,
        on_delete=models.CASCADE
    )
    content = RichTextUploadingField()
    timestamp = models.DateTimeField(
        auto_now_add=True
    )
    post = models.ForeignKey(
        Post,
        on_delete=models.CASCADE,
    )
    is_active = models.BooleanField(
        default=True
    )

    def __str__(self):
        return self.owner.email
