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
  selectedTank?: Tank;

  tanks: any = [];
  diff: number;

  constructor(
    private tanksService: TanksService,
    private messageService: MessageService
  ) {}

  onSelect(tank: Tank): void {
    this.selectedTank = tank;
    this.messageService.add(`TanksComponent: Selected tank id=${tank.id}`);
  }

  ngOnInit(): void {
    this.tanksService.getTanks().subscribe(
      (res) => {
        this.tanks = res;
        res.forEach((tank) => {
          var today = moment();
          var deliveryDateMoment = moment(tank.deliveryDate, 'DD/MM/YYYY');
          var diff = deliveryDateMoment.diff(today, 'days');
          if (diff < 0) {
            tank.status = 'danger';
          } else {
            if (diff == 1 || diff == 0) {
              tank.status = 'warning';
            } else {
              if (diff >= 2) {
                tank.status = 'success';
              }
            }
          }
        });
      },
      (err) => console.log(err)
    );
  }

  
}
