import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { MapComponent} from '../../components/map/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(MapComponent) _map: MapComponent

  constructor(public navCtrl: NavController, 
              public navParams: NavParams) {}

  ionViewDidLoad(){
    this._map.loadMap();
  }
}