import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  constructor(private _:HttpClient) { }

  letsCreateAnotherMethod() {
    console.log("check !!!")
  }
  getTracks() {
    return this._.get('http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=d124dfd581888ee0166576dfe548b558&format=json')
  }
}
