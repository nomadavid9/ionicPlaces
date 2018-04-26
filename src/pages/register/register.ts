import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user'
import { TabsPage } from '../../pages/tabs/tabs';
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  user: any = {};

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public _user: UserProvider) {
  }

  ionViewDidLoad(){
    console.log("user", this.user);
  }

  registerSubmit(){
    this._user.registerUser(this.user)
      .subscribe((userRes: any)=>{
          console.log("Data returned: ", userRes)
          this.navCtrl.push(TabsPage);
          sessionStorage.setItem('token', userRes.token)
          sessionStorage.setItem('userId', userRes.userId)
      })
  }

}
