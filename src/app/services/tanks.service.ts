import { Injectable } from '@angular/core';

@Injectable()
export class TanksService {
  private tanks: Tank[] = [
    {
      accordionNo: 'One',

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
      accordionNo: 'Two',

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
      accordionNo: 'Three',

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
      accordionNo: 'Four',

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
      accordionNo: 'Five',

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
      accordionNo: 'Six',

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
      accordionNo: 'Seven',

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
      accordionNo: 'Eight',

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
      accordionNo: 'Nine',
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
      accordionNo: 'Ten',
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
      accordionNo: 'Eleven',
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
      accordionNo: 'Twelve',
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
      accordionNo: 'Thirteen',
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
      accordionNo: 'Fourteen',
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
      accordionNo: 'Fifteen',
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

  getTank(id: string): Tank {
    return this.tanks[id];
  }
}

export interface Tank {
  accordionNo: string;
  nombre: string;
  matDescrption: string;
  batchNo: string;
  client: string;
  startDate: string;
  deliveryDate: string;
  etapaActual: string;
  status: string;
}
