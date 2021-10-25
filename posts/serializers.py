from rest_framework import serializers

from taggit_serializer.serializers import (
    TagListSerializerField,
    TaggitSerializer
)

from .models import (
    Answer,
    Post
)


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
            'answers',
        ]

    @staticmethod
    def get_answers(obj):
        return AnswerSerializer(Answer.objects.filter(post=obj), many=True).data


class AnswerSerializer(serializers.ModelSerializer):

    class Meta:
        model = Answer
        fields = [
            'id',
            'content',
            'owner',
            'post',
        ]
