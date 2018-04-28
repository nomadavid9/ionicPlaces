import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class MapsProvider {

  api_key: string = 'AIzaSyBGdoHVZTc5cR9fXMLJoX96AMzOIqY_vSk';

  constructor(public http: HttpClient) {
  }

  
}
