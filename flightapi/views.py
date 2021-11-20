from .models import (
    Country,
    City,
    UserType,
    Airport,
    Company,
    Flight,
    Reservation,
)

from .serializers import (
    CountrySerializer,
    CitySerializer,
    UserTypeSerializer,
    AirportSerializer,
    CompanySerializer,
    FlightSerializer,
    ReservationSerializer,
)

from rest_framework import generics
from rest_framework.permissions import IsAdminUser
from .permissions import (
    EveryoneReadOnlySuperuserCreate,
    ForFlight,
    ForReservationList,
    ForReservationDetail,
    )


# Country views views here.
class CountryListView(generics.ListCreateAPIView):
    queryset = Country.objects.all()
    serializer_class = CountrySerializer
    permission_classes = [EveryoneReadOnlySuperuserCreate]

class CountryDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Country.objects.all()
    serializer_class = CountrySerializer
    permission_classes = [EveryoneReadOnlySuperuserCreate]

# City views views here.
class CityListView(generics.ListCreateAPIView):
    queryset = City.objects.all()
    serializer_class = CitySerializer
    permission_classes = [EveryoneReadOnlySuperuserCreate]

class CityDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = City.objects.all()
    serializer_class = CitySerializer
    permission_classes = [EveryoneReadOnlySuperuserCreate]

# UserType views views here.
class UserTypeListView(generics.ListCreateAPIView):
    queryset = UserType.objects.all()
    serializer_class = UserTypeSerializer
    permission_classes = [EveryoneReadOnlySuperuserCreate]

class UserTypeDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = UserType.objects.all()
    serializer_class = UserTypeSerializer
    permission_classes = [EveryoneReadOnlySuperuserCreate]

# Airport views views here.
class AirportListView(generics.ListCreateAPIView):
    queryset = Airport.objects.all()
    serializer_class = AirportSerializer
    permission_classes = [EveryoneReadOnlySuperuserCreate]

class AirportDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Airport.objects.all()
    serializer_class = AirportSerializer
    permission_classes = [EveryoneReadOnlySuperuserCreate]

# Company views views here.
class CompanyListView(generics.ListCreateAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer
    permission_classes = [EveryoneReadOnlySuperuserCreate]

class CompanyDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer
    permission_classes = [EveryoneReadOnlySuperuserCreate]

# Flight views views here.
class FlightListView(generics.ListCreateAPIView):
    queryset = Flight.objects.all()
    serializer_class = FlightSerializer
    permission_classes = [ForFlight]

    def perform_create(self, serializer):
        serializer.save()

class FlightDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Flight.objects.all()
    serializer_class = FlightSerializer
    permission_classes = [ForFlight]

# Reservation views views here.
class ReservationListView(generics.ListCreateAPIView):
    queryset = Reservation.objects.all()
    serializer_class = ReservationSerializer
    permission_classes = [ForReservationList]

class ReservationDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Reservation.objects.all()
    serializer_class = ReservationSerializer
    permission_classes = [ForReservationDetail]

