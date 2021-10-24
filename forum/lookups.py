from ajax_select import register, LookupChannel

from django.contrib.auth import get_user_model

User = get_user_model()


@register('user')
class ThingsLookup(LookupChannel):

    model = User

    def get_query(self, q, request):
        return self.model.objects.filter(username__icontains=q).order_by('username')
