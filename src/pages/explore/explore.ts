import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PlacesProvider } from "../../providers/places/places"

@Component({
  selector: 'page-explore',
  templateUrl: 'explore.html'
})
export class ExplorePage {
  places: any[];
  placePhotos: any[] = [];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public _places: PlacesProvider) {
  }

  ionViewDidLoad(){
    this._places.places
      .subscribe((updatedPlaces: any) => {
        this.places = updatedPlaces;
        console.log("Places on Screen: ", this.places);
        for (let place of this.places){
          if(place.photos){
            place.photos[0]
              .photo_reference = (place.photos[0]
                .getUrl({"maxWidth": 200,"maxHeight": 200}))
          }
        }
      })
  }

}
