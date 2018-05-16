import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
  selector: 'page-faves',
  templateUrl: 'faves.html',
})
export class FavesPage {

  favPlaces: any;

  constructor(public navCtrl: NavController,
              public viewCtrl: ViewController, 
              public navParams: NavParams,
              public _user: UserProvider) {
  }

  ionViewWillEnter() {
    this._user.getFaves()
      .subscribe((data) =>{
        console.log(data);
        this.favPlaces = data;
    })
  }

}
