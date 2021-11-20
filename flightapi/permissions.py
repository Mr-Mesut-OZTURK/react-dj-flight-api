from rest_framework import permissions

class EveryoneReadOnlySuperuserCreate(permissions.IsAdminUser):
    
    def has_permission(self, request, view):
        if request.method in permissions.SAFE_METHODS:
            return True
        else:
            return bool(request.user and request.user.is_superuser)

class ForFlight(permissions.BasePermission):
    def has_permission(self, request, view):
        if request.method in permissions.SAFE_METHODS:
            return True
        else:
            return bool(request.user.is_staff or request.user.is_superuser)

    def has_object_permission(self, request, view, obj):
        if request.method in permissions.SAFE_METHODS:
            return True
        else:
            return bool(obj.author == request.user or request.user.is_superuser)

class ForReservationList(permissions.BasePermission):

    def has_permission(self, request, view):
        if request.method in permissions.SAFE_METHODS:
            return request.user.is_superuser
        else:
            return request.user

class ForReservationDetail(permissions.BasePermission):
    
    def has_object_permission(self, request, view, obj):
        if request.method in permissions.SAFE_METHODS:
            return bool(obj.user == request.user or request.user.is_superuser)
        else:
            return bool(obj.user == request.user or request.user.is_superuser)
    