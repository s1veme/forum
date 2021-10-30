from rest_framework import serializers

from .models import News


class NewsSerializer(serializers.ModelSerializer):

    owner_name = serializers.ReadOnlyField(source='owner.username')

    class Meta:
        model = News
        fields = [
            'id',
            'title',
            'content',
            'owner_name',
            'owner',
        ]
