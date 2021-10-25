from django.db import models

from django.contrib.auth import get_user_model

from taggit.managers import TaggableManager
from ckeditor_uploader.fields import RichTextUploadingField

User = get_user_model()


class Answer(models.Model):
    owner = models.ForeignKey(
        User,
        on_delete=models.CASCADE
    )
    content = RichTextUploadingField(
        'Контент ответа'
    )
    timestamp = models.DateTimeField(
        auto_now_add=True
    )

    def __str__(self):
        return self.content


class Post(models.Model):
    title = models.CharField(
        'Заголовок',
        max_length=240
    )
    content = RichTextUploadingField(
        'Контент поста'
    )
    owner = models.ForeignKey(
        User,
        on_delete=models.CASCADE
    )
    timestamp = models.DateTimeField(
        auto_now_add=True
    )
    answers = models.ManyToManyField(
        Answer
    )
    tags = TaggableManager()

    def __str__(self):
        return self.title
