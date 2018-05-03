import { Component, Input } from '@angular/core';
import { UserProvider } from '../../providers/user/user'
import { FavesPage } from '../../pages/faves/faves';
@Component({
  selector: 'card',
  templateUrl: 'card.html'
})
export class CardComponent {
  @Input() place: any;
  @Input() favesActive: any;
  activeFaves: any = this._faves.favesActive;

  constructor(private _user: UserProvider, private _faves: FavesPage) {
  }
  
  addToFaves(place: any){
    let favPlace: any = {
      "name": place.name,
      "photo_reference": place.photo_reference,
      "vicinity": place.vicinity,
      "rating": place.rating,
      "level_array": place.level_array
    }
    console.log(favPlace);
    this._user.addToFaves(favPlace)
      .subscribe((data)=>{
        console.log("Added " + place.name + " to Favorites")
        console.log(data);
      })
  }
}
