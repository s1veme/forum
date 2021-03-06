from django.contrib import admin

from ajax_select import make_ajax_form

from .models import (
    Answer,
    Post
)


@admin.register(Post)
class PostAdmin(admin.ModelAdmin):

    form = make_ajax_form(
        Post,
        {
            'owner': 'user'
        }
    )

    date_hierarchy = 'timestamp'
    search_fields = ['title', 'owner__username']


@admin.register(Answer)
class AnswerAdmin(admin.ModelAdmin):

    form = make_ajax_form(
        Post,
        {
            'owner': 'user'
        }
    )

    list_display = ('id', 'owner', 'post')

    search_fields = ['id', 'owner']
