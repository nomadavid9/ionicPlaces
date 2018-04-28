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
  myLocation: any;
  newCenter: any;
  places: BehaviorSubject<any[]>;
  options: {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  }

  constructor(public _geo: Geolocation, public platform: Platform) {
    this.places = new BehaviorSubject([]);
  }

  //Updates places array in HomePage!
  placesUpdate(places){
    this.places.next(places);
  }

  //Loads initial map based on current geoLocation
  loadMap() {
    navigator.geolocation.getCurrentPosition((location) => {
      this.myLocation = {lat: location.coords.latitude, lng: location.coords.longitude}
      this.newMap(this.myLocation, 15)
    }, (error) => {
      console.log(error);
    }, this.options);
  }

  //Makes a map based on location and current zoom level, initial values set to loc: geoTag and radius 15
  newMap(location, zoom){
    //calcs radius based on zoom level
    let newRadius = this.newRadius(zoom)
    console.log("Radius: ", newRadius)
    this.map = new google.maps.Map(this.mapElement.nativeElement, {
      center: location,
      zoom: zoom
    })
    //initializes infowindow
    this.infowindow = new google.maps.InfoWindow();

    //Runs placeSearch for every instance of newMap
    this.placeSearch(location, newRadius);
  }

  placeSearch(location, radius){
    var service = new google.maps.places.PlacesService(this.map);
    service.nearbySearch({
      location: location,
      radius: radius,
      type: ['store']
    }, (results,status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        //update Behavior subject for populating menu on HomePage
        this.placesUpdate(results);
        for (var i = 0; i < results.length; i++) {
          //Creates a marker for each place
          this.createMarker(results[i]);
        }
      }
    });
  }

  //Method handles creation of marker based on location of place
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
  }

  //Logic for calculating new Radius
  newRadius(zoom){
    let radius;
    zoom <13 ? radius = 10000: (zoom < 15 ? radius = 5000: radius = 1000)
    return radius;
  }

  updateMap(){
    //gets Zoom Level
    let zoom = this.map.getZoom();

    //gets Center of current map
    let lat = this.map.getCenter().lat();
    let lng = this.map.getCenter().lng();
    this.newCenter = {lat, lng}

    //creates new map by clicking 'update' FAB
    this.newMap(this.newCenter, zoom)
    
  }
}
