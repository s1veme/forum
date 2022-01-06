from django.urls import path

from search.views import SearchPostView

urlpatterns = [
    path('post/', SearchPostView.as_view(), name='search_post')
]
