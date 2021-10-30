from django.db import models

from django.contrib.auth import get_user_model

from ckeditor_uploader.fields import RichTextUploadingField

User = get_user_model()


class Category(models.Model):
    name = models.CharField(
        max_length=248
    )


class News(models.Model):
    title = models.CharField(
        max_length=248
    )
    category = models.ForeignKey(
        Category,
        on_delete=models.CASCADE
    )
    content = RichTextUploadingField()
    owner = models.ForeignKey(
        User,
        on_delete=models.CASCADE
    )
    is_active = models.BooleanField(
        default=True
    )
    timestamp = models.DateTimeField(
        auto_now_add=True
    )
    # todo: comments

    def __str__(self):
        return self.title
