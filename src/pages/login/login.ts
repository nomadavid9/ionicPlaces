import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';
import { RegisterPage } from '../../pages/register/register';
import { TabsPage } from '../../pages/tabs/tabs';
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user: any = {};

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public _user: UserProvider) {
  }

  loginSubmit(){
    console.log(this.user);
    this._user.loginUser(this.user)
      .subscribe((userRes: any) => {
        console.log("Data returned: ", userRes)
        this.navCtrl.push(TabsPage);
        sessionStorage.setItem('userId', userRes.userId)
        sessionStorage.setItem('token', userRes.token)
        
    })
  }

  navRegister(){
    this.navCtrl.push(RegisterPage);
  }
}
