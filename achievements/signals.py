from django.db.models import Case, Q, When
from django.db.models.signals import post_save
from django.dispatch import receiver

from posts.models import Answer, Post
from .models import Achievement


@receiver(post_save, sender=Answer)
def check_achievement(sender, instance, **kwargs):
    number_answers = Answer.objects.filter(owner=instance.owner).count()
    number_questions = Post.objects.filter(owner=instance.owner).count()
    tags = instance.post.tags.all()

    achievements = Achievement.objects.annotate(
        result = Case(
            When(number_answers=number_answers, then=1),
            When(number_questions=number_questions, then=1),
            When(number_questions=number_questions, tags__in=tags, then=1),
            When(number_answers=number_answers, tags__in=tags, then=1),
            default=None
        )
    ).filter(result=1).exclude(user=instance.owner)

    instance.owner.achievements.add(*achievements)