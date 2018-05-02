import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { FavesPage } from '../pages/faves/faves';
import { ExplorePage } from '../pages/explore/explore';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';

import { MapComponent } from '../components/map/map';
import { CardComponent } from '../components/card/card';

import { Geolocation } from '@ionic-native/geolocation';
import { UserProvider } from '../providers/user/user';
import { PlacesProvider } from '../providers/places/places';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FavesPage,
    ExplorePage,
    TabsPage,
    LoginPage,
    RegisterPage,
    MapComponent,
    CardComponent
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    FavesPage,
    ExplorePage,
    TabsPage,
    LoginPage,
    RegisterPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Geolocation,
    UserProvider,
    PlacesProvider
  ]
})
export class AppModule {}
