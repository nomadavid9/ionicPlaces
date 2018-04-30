import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MapComponent} from '../../components/map/map';
import { UserProvider } from '../../providers/user/user';
import { MenuController } from "ionic-angular"

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
              public menuCtrl: MenuController) {}

  ionViewDidLoad(){
    this._map.loadMap();
    this._map.places
      .subscribe((updatedPlaces) => {
        this.places = updatedPlaces;
        console.log("Places on Screen: ", this.places);
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