import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class PlacesProvider {
  api_key: string = 'AIzaSyBGdoHVZTc5cR9fXMLJoX96AMzOIqY_vSk';
  places: BehaviorSubject<any[]>;

  constructor(public http: HttpClient) {
    this.places = new BehaviorSubject([]);
  }

  placesUpdate(places){
    this.places.next(places);
  }
}
