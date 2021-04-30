import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TanksService } from 'src/app/services/tanks.service';
import { Location } from '@angular/common';
import { Tank } from '../../Tank';
import * as moment from 'moment';

@Component({
  selector: 'app-tank-detail',
  templateUrl: './tank-detail.component.html',
  styleUrls: ['./tank-detail.component.css'],
})
export class TankDetailComponent implements OnInit {
  tank?: any;
  startDate: string;
  deliveryDate: any;
  semaphore: string;

  constructor(
    private route: ActivatedRoute,
    private tankService: TanksService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getTank();
  }

  getTank(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.tankService.getTank(id).subscribe((tank) => {
      this.tank = tank;
      var today = moment();
      var deliveryDateMoment = moment(this.tank.deliveryDate, 'DD/MM/YYYY');
      console.log(deliveryDateMoment)
      var diff = deliveryDateMoment.diff(today, 'days');
      if (diff < 0) {
        this.semaphore = 'danger';
      } else {
        if (diff == 1 || diff == 0) {
          this.semaphore = 'warning';
        } else {
          if (diff >= 2) {
            this.semaphore = 'success';
          }
        }
      }
      console.log(this.semaphore);
    });
  }

  // getStartDate() {
  //   const id = this.route.snapshot.paramMap.get('id');
  //   this.tankService.getStartDate(id).subscribe((startDate) => {
  //     this.startDate = startDate;
  //     console.log(this.startDate);
  //   });
  // }

  // getDeliveryDate() {
  //   const id = this.route.snapshot.paramMap.get('id');
  //   this.tankService.getDeliveryDate(id).subscribe((deliveryDate) => {
  //     this.deliveryDate = deliveryDate;
  //     console.log(this.deliveryDate);
  //   });
  // }

  // async getDuration() {
  //   var startDateMoment = moment(this.tank.startDate, 'DD/MM/YYYY');
  //   var deliveryDateMoment = moment(this.tank.deliveryDate, 'DD/MM/YYYY');
  //   console.log('Here');
  //   var diff = startDateMoment.diff(deliveryDateMoment, 'days');
  //   if (diff < 2) {
  //     this.semaphore = 'danger';
  //   } else {
  //     if (diff > 4) {
  //       this.semaphore = 'primary';
  //     } else {
  //       if (diff < 4 && diff > 2) {
  //         this.semaphore = 'warning';
  //       }
  //     }
  //   }
  //   console.log(this.semaphore);
  // }

  goBack(): void {
    this.location.back();
  }

  // save(): void {
  //   this.tankService.updateTank(this.tank)
  //     .subscribe(() => this.goBack());
  // }
}
