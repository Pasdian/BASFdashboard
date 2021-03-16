import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

// import { Hero } from './hero';
// import { MessageService } from './message.service';

@Injectable()
export class TanksService {
  private tanks: Tank[] = [
    {
      id: 1,

      nombre: 'Tanque 1',
      matDescrption: 'Agua',
      batchNo: '1',
      client: 'Tesla',
      startDate: '04-03-2021',
      deliveryDate: '07-03-2021',
      etapaActual: 'Cargando',
      status: 'green',
    },
    {
      id: 2,

      nombre: 'Tanque 2',
      matDescrption: 'Agua',
      batchNo: '1',
      client: 'Tesla',
      startDate: '04-03-2021',
      deliveryDate: '07-03-2021',
      etapaActual: 'Cargando',
      status: 'green',
    },
    {
      id: 3,

      nombre: 'Tanque 3',
      matDescrption: 'Agua',
      batchNo: '1',
      client: 'Tesla',
      startDate: '04-03-2021',
      deliveryDate: '07-03-2021',
      etapaActual: 'Cargando',
      status: 'green',
    },
    {
      id: 4,

      nombre: 'Tanque 4',
      matDescrption: 'Agua',
      batchNo: '1',
      client: 'Tesla',
      startDate: '04-03-2021',
      deliveryDate: '07-03-2021',
      etapaActual: 'Cargando',
      status: 'green',
    },
    {
      id: 5,

      nombre: 'Tanque 5',
      matDescrption: 'Agua',
      batchNo: '1',
      client: 'Tesla',
      startDate: '04-03-2021',
      deliveryDate: '07-03-2021',
      etapaActual: 'Cargando',
      status: 'green',
    },
    {
      id: 6,

      nombre: 'Tanque 6',
      matDescrption: 'Agua',
      batchNo: '1',
      client: 'Tesla',
      startDate: '04-03-2021',
      deliveryDate: '07-03-2021',
      etapaActual: 'Cargando',
      status: 'green',
    },
    {
      id: 7,

      nombre: 'Tanque 7',
      matDescrption: 'Agua',
      batchNo: '1',
      client: 'Tesla',
      startDate: '04-03-2021',
      deliveryDate: '07-03-2021',
      etapaActual: 'Cargando',
      status: 'green',
    },
    {
      id: 8,
      nombre: 'Tanque 8',
      matDescrption: 'Agua',
      batchNo: '1',
      client: 'Tesla',
      startDate: '04-03-2021',
      deliveryDate: '07-03-2021',
      etapaActual: 'Cargando',
      status: 'green',
    },

    {
      id: 9,
      nombre: 'Tanque 9',
      matDescrption: 'Agua',
      batchNo: '1',
      client: 'Tesla',
      startDate: '04-03-2021',
      deliveryDate: '07-03-2021',
      etapaActual: 'Cargando',
      status: 'green',
    },
    {
      id: 10,
      nombre: 'Tanque 10',
      matDescrption: 'Agua',
      batchNo: '1',
      client: 'Tesla',
      startDate: '04-03-2021',
      deliveryDate: '07-03-2021',
      etapaActual: 'Cargando',
      status: 'green',
    },
    {
      id: 11,
      nombre: 'Tanque 11',
      matDescrption: 'Agua',
      batchNo: '1',
      client: 'Tesla',
      startDate: '04-03-2021',
      deliveryDate: '07-03-2021',
      etapaActual: 'Cargando',
      status: 'green',
    },
    {
      id: 12,
      nombre: 'Tanque 12',
      matDescrption: 'Agua',
      batchNo: '1',
      client: 'Tesla',
      startDate: '04-03-2021',
      deliveryDate: '07-03-2021',
      etapaActual: 'Cargando',
      status: 'green',
    },
    {
      id: 13,
      nombre: 'Tanque 13',
      matDescrption: 'Agua',
      batchNo: '1',
      client: 'Tesla',
      startDate: '04-03-2021',
      deliveryDate: '07-03-2021',
      etapaActual: 'Cargando',
      status: 'green',
    },
    {
      id: 14,
      nombre: 'Tanque 14',
      matDescrption: 'Agua',
      batchNo: '1',
      client: 'Tesla',
      startDate: '04-03-2021',
      deliveryDate: '07-03-2021',
      etapaActual: 'Cargando',
      status: 'green',
    },
    {
      id: 15,
      nombre: 'Tanque 15',
      matDescrption: 'Agua',
      batchNo: '1',
      client: 'Tesla',
      startDate: '04-03-2021',
      deliveryDate: '07-03-2021',
      etapaActual: 'Cargando',
      status: 'green',
    },
  ];

  constructor() {
    console.log('ConsolasService Created');
  }

  getTanks(): Tank[] {
    return this.tanks;
  }

  getTank(id: number): Tank {
    return this.tanks[id];
  }
}

export interface Tank {
  id: number;
  nombre: string;
  matDescrption: string;
  batchNo: string;
  client: string;
  startDate: string;
  deliveryDate: string;
  etapaActual: string;
  status: string;
}