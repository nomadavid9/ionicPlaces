import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { MapComponent} from '../../components/map/map';
import { LoginPage } from '../../pages/login/login';

import { UserProvider } from '../../providers/user/user';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(MapComponent) _map: MapComponent

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public _user: UserProvider) {}

  ionViewDidLoad(){
    this._map.loadMap();
  }

  logoutUser(){
    this.navCtrl.push(LoginPage);
    this._user.logoutUser();
  }
}