import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Tank } from '../Tank';
// import { TANKS } from '../mock-tanks';
import { MessageService } from './message.service';

// import { Hero } from './hero';
// import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class TanksService {

  API_URI = "http://localhost:3000/api"
  constructor(private http: HttpClient, private messageService: MessageService) {
  }

  getTanks() {
    return this.http.get(`${this.API_URI}/tanks`)
  }

  getTank(id: string): Observable<any> {
    return this.http.get(`${this.API_URI}/tanks/${id}`)
  
  }

  getStartDate(id:string){
    return this.http.get(`${this.API_URI}/tanks/startDate/${id}`)
  }
  getDeliveryDate(id:string){
    return this.http.get(`${this.API_URI}/tanks/deliveryDate/${id}`)
  }
}
