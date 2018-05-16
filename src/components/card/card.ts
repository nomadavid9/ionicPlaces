import { Component, Input } from '@angular/core';
import { UserProvider } from '../../providers/user/user'

@Component({
  selector: 'card',
  templateUrl: 'card.html'
})
export class CardComponent {
  @Input() place: any;

  constructor(private _user: UserProvider) {
  }
  
  addToFaves(place: any){
    let favPlace: any = {
      "name": place.name,
      "photo_reference": place.photo_reference,
      "vicinity": place.vicinity,
      "rating": place.rating,
      "level_array": place.level_array
    }
    this._user.addToFaves(favPlace)
      .subscribe((data)=>{
        console.log("Added " + place.name + " to Favorites")
        console.log(data);
      })
  }
}
