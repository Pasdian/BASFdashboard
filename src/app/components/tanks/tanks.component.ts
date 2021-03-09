import { Component, OnInit } from '@angular/core';
import { Tank } from '../../tank';

@Component({
  selector: 'app-tanks',
  templateUrl: './tanks.component.html',
  styleUrls: ['./tanks.component.css']
})
export class TanksComponent implements OnInit {

  tank : Tank = {
    id: 1,
    name: 'Tanque 1',
    materialDescription: "materialDesc",
    batchNo: "batchNo",
    batchSize: "batchSize",
    Client: "Client",
    deliveryDate: "deliveryDate",
    startDate: "StartDate",
    currentStatus: currentStatus.Cargando,
    semaphore: semaphore.green
  };

  constructor() { }

  ngOnInit(): void {
  }

}
enum currentStatus{
  Cargando = "Cargando",
  EC = "Entonado/Calidad",
  porEnvasar = "Por envasar",
  Envasando = "Envasando"
}

enum semaphore{
  red,
  yellow,
  green,
  purple
}
