import { Injectable } from '@angular/core';

import{ HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TeeTimeService {

  constructor(private http: HttpClient) { }

  getArtists(){
    return this.http.get('http://localhost:3000/api/artist')
  }
}


