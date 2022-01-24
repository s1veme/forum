from django.db.models.signals import post_save
from django.dispatch import receiver
from user.models import User


@receiver(post_save, sender=User)
def check_achievement(sender, **kwargs):
    # todo: checking if the user deserved the achievement and issuing achievements
    ...