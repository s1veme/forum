from ajax_select import urls as ajax_select_urls
from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import (include, path)
from drf_yasg import openapi
from drf_yasg.views import get_schema_view
from rest_framework import permissions


schema_view = get_schema_view(
    openapi.Info(title="Forum Schema API", default_version='v1'),
    public=True,
    permission_classes=(permissions.AllowAny,),
)


urlpatterns = [
    path('admin/', admin.site.urls),

    # 3rd party
    path('api/auth/', include('djoser.urls')),
    path('ckeditor/', include('ckeditor_uploader.urls')),
    path('ajax_select/', include(ajax_select_urls)),

    # local
    path('api/user/', include('user.urls')),
    path('api/posts/', include('posts.urls')),
    path('api/news/', include('news.urls')),
    path('api/search/', include('search.urls')),
    path('api/schema/', schema_view.with_ui('swagger', cache_timeout=0), name='schema'),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
