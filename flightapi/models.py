from django.db import models
from django.db.models.deletion import CASCADE

from django.contrib.auth.models import User
from django.utils.text import slugify


# Create your models here.
class Country(models.Model):
    name = models.CharField(max_length=100, unique=True)
    country_code = models.CharField(max_length=20)

    def __str__(self):
        return self.name

class City(models.Model):
    name = models.CharField(max_length=100, unique=True)
    city_code = models.CharField(max_length=20)
    country = models.ForeignKey(Country, on_delete=CASCADE)

    def __str__(self):
        return self.name

class UserType(models.Model):
    type = models.CharField(max_length=50)
    price_multiplier = models.FloatField()

    def __str__(self):
        return self.type

class Airport(models.Model):
    name = models.CharField(max_length=200)
    abbr = models.CharField(max_length=10)
    city = models.ForeignKey(City, on_delete=CASCADE)

    def __str__(self):
        return self.name

class Company(models.Model):
    name = models.CharField(max_length=200)
    admin = models.ForeignKey(User, on_delete=CASCADE, null=True, blank=True)

    slug = models.SlugField(blank=True, null=True)

    def save(self, *args, **kwargs):
        self.slug = slugify(self.name)
        super(Company, self).save(*args, **kwargs)

    def __str__(self):
        return self.name

class Flight(models.Model):
    departure_city = models.ForeignKey(City, on_delete=CASCADE, related_name='departure_city')
    departure_airport = models.ForeignKey(Airport, on_delete=CASCADE, related_name='departure_airport')

    arrive_city = models.ForeignKey(City, on_delete=CASCADE, related_name='arrive_city')
    arrive_airport = models.ForeignKey(Airport, on_delete=CASCADE, related_name='arrive_airport')

    flight_day = models.DateField()
    flight_time = models.TimeField()

    price = models.IntegerField()

    author = models.ForeignKey(User, on_delete=CASCADE, null=True, blank=True)
    company = models.ForeignKey(Company, on_delete=CASCADE, null=True, blank=True)


    def __str__(self):
        aa = self.company.name if self.company else 'null'
        bb = self.author.username if self.author else 'null'
        return aa + ' / ' + bb + ' / ' + self.departure_city.name + ' - ' + self.arrive_city.name + ' / ' + str(self.flight_day)

class Reservation(models.Model):
    user = models.ForeignKey(User, on_delete=CASCADE)
    user_type = models.ForeignKey(UserType, on_delete=CASCADE, default='Normal')
    flight = models.ForeignKey(Flight, on_delete=CASCADE)
    checkin = models.BooleanField()

    def __str__(self):
        return self.user.username + ' - ' + str(self.flight)