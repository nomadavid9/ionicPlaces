import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MapComponent} from '../../components/map/map';

import { UserProvider } from '../../providers/user/user';
import { PlacesProvider } from "../../providers/places/places"

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(MapComponent) _map: MapComponent
  places: any[];
  content: any;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public _user: UserProvider,
              public _places: PlacesProvider) {}

  ionViewDidLoad(){
    this._map.loadMap();
    this._places.places
      .subscribe((updatedPlaces: any) => {
        this.places = updatedPlaces;
        console.log("Places on Screen: ", this.places)
      })
    
  }

  placeSelected(place){
    console.log(place.name);
  }

  logoutUser(){
    sessionStorage.clear();
    window.location.reload();
    this._user.logoutUser();
  }
}