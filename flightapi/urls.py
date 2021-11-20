from django.urls import path, include
from .views import (
    CountryListView,
    CountryDetailView,
    CityListView,
    CityDetailView,
    UserTypeListView,
    UserTypeDetailView,
    AirportListView,
    AirportDetailView,
    CompanyListView,
    CompanyDetailView,
    FlightListView,
    FlightDetailView,
    ReservationListView,
    ReservationDetailView,
)

urlpatterns = [
    
    path('countries/', CountryListView.as_view()),
    path('countries/<int:pk>', CountryDetailView.as_view()),

    path('cities/', CityListView.as_view()),
    path('cities/<int:pk>', CityDetailView.as_view()),

    path('user-types/', UserTypeListView.as_view()),
    path('user-types/<int:pk>', UserTypeDetailView.as_view()),

    path('airports/', AirportListView.as_view()),
    path('airports/<int:pk>', AirportDetailView.as_view()),

    path('companies/', CompanyListView.as_view()),
    path('companies/<int:pk>', CompanyDetailView.as_view()),

    path('flights/', FlightListView.as_view()),
    path('flights/<int:pk>', FlightDetailView.as_view()),

    path('reservations/', ReservationListView.as_view()),
    path('reservations/<int:pk>', ReservationDetailView.as_view()),
]
