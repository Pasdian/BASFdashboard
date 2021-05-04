import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { Subscription } from 'rxjs';
import { TanksService } from 'src/app/services/tanks.service';

@Component({
  selector: 'app-tank-table',
  templateUrl: './tank-table.component.html',
  styleUrls: ['./tank-table.component.css'],
})
export class TankTableComponent implements OnInit {

  tanks: any = [];
  semaphore: string
  private subscriptions: Subscription[] = []

  constructor(private tanksService: TanksService) {}

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

  getStatus(id): string{
    for (var i=0; i < this.tanks.length; i++)
    if (this.tanks[i]['id'] == id)
      return this.tanks[i].status;


  }

  
}
