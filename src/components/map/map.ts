import { Component, ViewChild, ElementRef } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';
import { Platform } from 'ionic-angular';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
declare var google;
  

@Component({
  selector: 'map',
  templateUrl: 'map.html'
})
export class MapComponent {
  @ViewChild('map') mapElement: ElementRef;
  map: any;
  infowindow: any;
  places: BehaviorSubject<any[]>;
  options: {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  }

  constructor(public _geo: Geolocation, public platform: Platform) {
    this.places = new BehaviorSubject([]);
  }

  //Updates places property in HomePage!
  placesUpdate(places){
    console.log("I Updated!")
    this.places.next(places);
  }

  loadMap() {
    navigator.geolocation.getCurrentPosition((location) => {
      console.log(location);
      this.map = new google.maps.Map(this.mapElement.nativeElement, {
        center: {lat: location.coords.latitude, lng: location.coords.longitude},
        zoom: 15
      });
  
      this.infowindow = new google.maps.InfoWindow();
      var service = new google.maps.places.PlacesService(this.map);
      
      service.nearbySearch({
        location: {lat: location.coords.latitude, lng: location.coords.longitude},
        radius: 1000,
        type: ['store']
      }, (results,status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          this.placesUpdate(results);
          for (var i = 0; i < results.length; i++) {
            this.createMarker(results[i]);
          }
        }
      });
    }, (error) => {
      console.log(error);
    }, this.options);
  }

  createMarker(place) {
    var placeLoc = place.geometry.location;
    var marker = new google.maps.Marker({
      map: this.map,
      position: placeLoc
    });
  
    google.maps.event.addListener(marker, 'click', () => {
      console.log(this.infowindow);
      this.infowindow.setContent(place.name);
      this.infowindow.open(this.map, marker);
    });
  }}
