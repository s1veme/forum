from django.db import models

from django.contrib.auth import get_user_model

from ckeditor_uploader.fields import RichTextUploadingField

User = get_user_model()


class Post(models.Model):
    title = models.CharField(
        'Заголовок',
        max_length=240
    )
    content = RichTextUploadingField(
        'Контент поста'
    )
    preview = models.ImageField(
        'Превью',
        upload_to='post-image',
        default='default.png'
    )
    owner = models.ForeignKey(
        User,
        on_delete=models.CASCADE
    )
    timestamp = models.DateTimeField(
        auto_now_add=True
    )

    def __str__(self):
        return self.title
