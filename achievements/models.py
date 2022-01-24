from django.db import models
from taggit.managers import TaggableManager


class Achievement(models.Model):
    title = models.CharField(
        max_length=500
    )
    description = models.TextField(
        blank=True,
        null=True
    )
    number_answers = models.PositiveIntegerField(
        blank=True,
        null=True
    )
    number_question = models.PositiveIntegerField(
        blank=True,
        null=True
    )
    tags = TaggableManager(blank=True)

    # todo: add image field

    def __str__(self):
        return self.title
