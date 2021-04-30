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
export class TankTableComponent implements OnInit, OnDestroy {

  tank?: any;
  semaphore: string
  private subscriptions: Subscription[] = []

  constructor( private tankService: TanksService) {}

  ngOnInit(): void {}

  getSemaphore(id: string): string {
    return "primary"
    // this.subscriptions.push(this.tankService.getTank(id).subscribe((tank) => {
    //   this.tank = tank;
    //   console.log('Tank_table');
    //   var today = moment();
    //   var deliveryDateMoment = moment(this.tank.deliveryDate, 'DD/MM/YYYY');
    //   var diff = deliveryDateMoment.diff(today, 'days');
      
    //   if (diff < 0) {
    //     this.semaphore = 'danger'
    //   } else {
    //     if (diff == 1 || diff == 0) {
    //       this.semaphore = 'warning';
    //     } else {
    //       if (diff >= 2) {
    //         this.semaphore = 'success';
    //       }
    //     }
    //   }
    // }));
    }

  ngOnDestroy(){
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
