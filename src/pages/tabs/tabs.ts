import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HomePage } from '../home/home';
import { FavesPage } from '../faves/faves';
import { ExplorePage } from '../explore/explore';

@Component({
  selector: 'page-tab',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root: any = ExplorePage;
  tab2Root: any = HomePage;
  tab3Root: any = FavesPage;


  constructor(public navCtrl: NavController) {}

}
