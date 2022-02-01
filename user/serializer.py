from rest_framework import serializers

from achievements.serializer import AchievementSerializer
from .models import User


class UserSerializer(serializers.ModelSerializer):
    achievements = AchievementSerializer(many=True)

    class Meta:
        model = User
        fields = [
            'id',
            'username',
            'status',
            'avatar',
            'achievements',
        ]
        ref_name = "UserSerializerForum"
