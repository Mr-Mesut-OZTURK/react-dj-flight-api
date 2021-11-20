from rest_framework import serializers
from .models import (
    Country,
    City,
    UserType,
    Airport,
    Company,
    Flight,
    Reservation,
)

class CountrySerializer(serializers.ModelSerializer):
    class Meta:
        model = Country
        fields = '__all__'

class CitySerializer(serializers.ModelSerializer):
    class Meta:
        model = City
        fields = '__all__'

class UserTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserType
        fields = '__all__'

class AirportSerializer(serializers.ModelSerializer):
    class Meta:
        model = Airport
        fields = '__all__'

class CompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = '__all__'

class FlightSerializer(serializers.ModelSerializer):
    # departure_city = serializers.CharField()
    # departure_airport = serializers.CharField()
    # arrive_city = serializers.CharField()
    # arrive_airport = serializers.CharField()
    # company = serializers.CharField()
    # author = serializers.StringRelatedField(default=serializers.CurrentUserDefault(), read_only=True)

    class Meta:
        model = Flight
        fields = '__all__'
        # exclude  = ['author']
        depth=1
        
class ReservationSerializer(serializers.ModelSerializer):
    user = serializers.CharField()
    user_type = serializers.CharField()
    flight = serializers.CharField()
    
    class Meta:
        model = Reservation
        fields = '__all__'
        # exclude  = ['user']
        # depth=1