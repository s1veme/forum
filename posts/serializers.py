from django.db import models
from rest_framework import serializers

from taggit_serializer.serializers import (
    TagListSerializerField,
    TaggitSerializer
)

from user.serializer import UserSerializer
from user.models import User

from .models import (
    Answer,
    Post
)


class PostSerializer(TaggitSerializer, serializers.ModelSerializer):

    tags = TagListSerializerField()

    class Meta:
        model = Post
        fields = [
            'id',
            'title',
            'content',
            'owner',
            'tags',
            'timestamp'
        ]


class AnswerSerializer(serializers.ModelSerializer):

    owner_name = serializers.ReadOnlyField(source='owner.username')

    class Meta:
        model = Answer
        fields = [
            'id',
            'content',
            'owner_name',
            'owner'
        ]
