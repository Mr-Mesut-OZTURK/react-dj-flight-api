from django.contrib import admin
from .models import (
    Country,
    City,
    UserType,
    Airport,
    Company,
    Flight,
    Reservation,
)

# Register your models here.
admin.site.register(Country)
admin.site.register(City)
admin.site.register(UserType)
admin.site.register(Airport)

class CompanyAdmin(admin.ModelAdmin):
        fields = ('name', 'admin')

admin.site.register(Company, CompanyAdmin)
admin.site.register(Flight)
admin.site.register(Reservation)