from rest_framework import permissions


class IsAuthenticatedAndOwnerOrReadOnly(permissions.BasePermission):
    """
    Проверка на собственника комментария/поста при редактировании/удалении.
    """

    def has_permission(self, request, view):
        if request.method in permissions.SAFE_METHODS:
            return True
        return bool(request.user and request.user.is_authenticated and not request.user.is_active)

    def has_object_permission(self, request, view, obj):
        if request.method in permissions.SAFE_METHODS:
            return True
        return bool(obj.owner == request.user and not request.user.is_active)


class IsAuthenticatedAndIsActive(permissions.BasePermission):
    """
    Проверка на то, что пользователь авторизирован и активирован
    """

    def has_permission(self, request, view):
        if request.method in permissions.SAFE_METHODS:
            return True
        return bool(request.user and request.user.is_authenticated and request.user.is_active)