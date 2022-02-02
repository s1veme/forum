from rest_framework import serializers
from taggit_serializer.serializers import (
    TagListSerializerField,
    TaggitSerializer
)

from .models import (
    Answer,
    Post
)


class AnswerSerializer(serializers.ModelSerializer):
    owner_name = serializers.ReadOnlyField(source='owner.username')

    class Meta:
        model = Answer
        fields = [
            'id',
            'content',
            'owner_name',
            'owner',
            'post',
        ]


class PostSerializer(TaggitSerializer, serializers.ModelSerializer):
    tags = TagListSerializerField()
    answers = serializers.SerializerMethodField()

    class Meta:
        model = Post
        fields = [
            'id',
            'title',
            'content',
            'owner',
            'tags',
            'timestamp',
            'answers',
        ]

    def get_answers(self, obj):
        return AnswerSerializer(Answer.objects.filter(post=obj), many=True).data
