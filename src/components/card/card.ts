import { Component, Input } from '@angular/core';

@Component({
  selector: 'card',
  templateUrl: 'card.html'
})
export class CardComponent {
  @Input() place

  constructor() {
  }
  
  addToFaves(place: any){
    console.log("Added " + place.name + " to Favorites")
    console.log(place);
  }
}
