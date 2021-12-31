from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from imagekit.admin import AdminThumbnail

from .models import User


class UserAdmin(BaseUserAdmin):
    list_display = ('username', 'email', 'is_staff', 'admin_thumbnail')
    list_filter = ('is_staff',)

    admin_thumbnail = AdminThumbnail(image_field='avatar')

    fieldsets = (
        (None, {'fields': ('username', 'email',
                           'password', 'status', 'avatar')}),

        ('Permissions', {'fields': ('is_staff', 'is_active')}),

        ('Informations', {'fields': ('updated_at', 'created_at')}),
    )

    readonly_fields = ('updated_at', 'created_at')

    search_fields = ('username', 'email')
    ordering = ('username', 'email')

    filter_horizontal = ()


admin.site.register(User, UserAdmin)
