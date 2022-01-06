from rest_framework.filters import SearchFilter
from rest_framework.generics import ListAPIView

from posts.models import Post
from posts.serializers import PostSerializer


class SearchPostView(ListAPIView):
    search_fields = ['title']
    filter_backends = (SearchFilter,)
    queryset = Post.objects.filter(is_active=True)
    serializer_class = PostSerializer
