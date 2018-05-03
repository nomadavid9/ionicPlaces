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
  favesActive: BehaviorSubject<boolean>;

  constructor(public navCtrl: NavController,
              public viewCtrl: ViewController, 
              public navParams: NavParams,
              public _user: UserProvider) {
    this.favesActive = new BehaviorSubject(false);
  }

  ionViewWillEnter() {
    console.log(this.favesActive)
    this._user.getFaves()
      .subscribe((data) =>{
        console.log(data);
        this.favPlaces = data;
        this.updateFavesActive(this.viewCtrl.isFirst())
    })
  }
  updateFavesActive(bool){
      this.favesActive.next(bool);
  }
}
