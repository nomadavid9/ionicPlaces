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
        for (let place of this.places){
          if(place.photos){
            place.photos[0]
              .photo_reference = (place.photos[0]
                .getUrl({"maxWidth": 200,"maxHeight": 200}))
          }
        }
      })
    this.priceLevel(this.places); 
    console.log("With price_level Array: ", this.places)
  }

  priceLevel(placeArray){
    for(let element of placeArray){
      element.level_array = [];
      if(element.price_level){
        for(let i = 0; i < element.price_level; i++){
          element.level_array.push(i);
        }
      }
    }
    return placeArray;
  }

  
}
