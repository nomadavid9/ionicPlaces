import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PlacesProvider } from "../../providers/places/places"

@Component({
  selector: 'page-explore',
  templateUrl: 'explore.html'
})
export class ExplorePage {
  places: any[];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public _places: PlacesProvider) {
  }

  ionViewWillEnter(){
    this._places.places
      .subscribe((updatedPlaces: any) => {
        this.places = updatedPlaces;
        for (let place of this.places){
          this.priceLevel(place); 
          this.getPhoto(place)
        }
      })
    console.log("With price_level Array: ", this.places)
  }
  getPhoto(place){
    if(place.photos){
      place.photo_reference = (place.photos[0]
          .getUrl({"maxWidth": 200,"maxHeight": 200}))
    }
    return place;
  }
  priceLevel(place){
      place.level_array = [];
      if(place.price_level){
        for(let i = 0; i < place.price_level; i++){
          place.level_array.push(i);
        }
      }
    return place;
  }

  
}
