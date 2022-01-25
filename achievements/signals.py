from django.db.models.signals import post_save
from django.dispatch import receiver

from posts.models import Answer


@receiver(post_save, sender=Answer)
def check_achievement(sender, instance, **kwargs):
    number_answers = Answer.objects.filter(owner=instance.owner).count()
    # todo: checking if the user deserved the achievement and issuing achievements
