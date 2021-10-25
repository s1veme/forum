from rest_framework import serializers

from taggit_serializer.serializers import (
    TagListSerializerField,
    TaggitSerializer
)

from .models import Post


class PostSerializer(TaggitSerializer, serializers.ModelSerializer):

    tags = TagListSerializerField()

    class Meta:
        model = Post
        fields = [
            'id',
            'title',
            'content',
            'tags',
            'owner',
            'timestamp'
        ]
