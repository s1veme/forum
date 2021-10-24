from django.contrib import admin
from django.urls import (
    path,
    include
)

from ajax_select import urls as ajax_select_urls


urlpatterns = [
    path('admin/', admin.site.urls),

    # 3rd party
    path('api/auth/', include('djoser.urls')),
    path('ckeditor/', include('ckeditor_uploader.urls')),
    path('ajax_select/', include(ajax_select_urls)),

    # local
    path('api/user/', include('user.urls'))
]
