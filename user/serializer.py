from rest_framework import serializers

from achievements.serializer import AchievementSerializer
from posts.models import Post
from posts.serializers import PostSerializer
from .models import User


class UserSerializer(serializers.ModelSerializer):
    achievements = AchievementSerializer(many=True)
    questions = serializers.SerializerMethodField()

    class Meta:
        model = User
        fields = [
            'id',
            'username',
            'status',
            'avatar',
            'achievements',
            'questions',
        ]
        ref_name = "UserSerializerForum"

    def get_questions(self, obj):
        return PostSerializer(Post.objects.filter(owner=obj), many=True).data
