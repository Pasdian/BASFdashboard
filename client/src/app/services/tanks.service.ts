import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Tank } from '../Tank';
import { TANKS } from '../mock-tanks';
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
    // const tanks = of(TANKS);
    // this.messageService.add('TankService: fetched tanks');
    // return tanks;
  }

  getTank(id: string) {
    return this.http.get(`${this.API_URI}/tanks/${id}`)
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    // const tank = TANKS.find(h => h.id === id) as Tank;
    // this.messageService.add(`TankService: fetched Tank id=${id}`);
    // return of(tank);
  }
}
