import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TanksService } from 'src/app/services/tanks.service';
import { Tank } from '../../Tank';
// import { TANKS } from '../../mock-tanks';
import { MessageService } from 'src/app/services/message.service';
import * as moment from 'moment';


@Component({
  selector: 'app-tanks',
  templateUrl: './tanks.component.html',
  styleUrls: ['./tanks.component.css'],
})
export class TanksComponent implements OnInit {

  selectedTank?: Tank

  tanks: any = [];
  diff: number

  constructor(private tanksSerivce: TanksService, private messageService: MessageService) {}


  onSelect(tank: Tank): void {
    this.selectedTank = tank;
    this.messageService.add(`TanksComponent: Selected tank id=${tank.id}`);
  }

  getDuration():void{
    const tank = this.selectedTank
    const startdateString = tank.startDate
    const deliveryDateString = tank.deliveryDate
    var startDateMoment = moment(startdateString, "DD/MM/YYYY");
    var deliveryDateMoment = moment(deliveryDateString, "DD/MM/YYYY")
    this.diff = startDateMoment.diff(deliveryDateMoment, 'days')
  }


  ngOnInit(): void {
    this.tanksSerivce.getTanks().subscribe(
      res => {
        this.tanks = res;
        
      },
      err => console.log(err)
    );
  }
  
}
