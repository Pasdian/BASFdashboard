import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TanksService } from 'src/app/services/tanks.service';
import { Location } from '@angular/common';
import { Tank } from "../../Tank";
import * as moment from 'moment';



@Component({
  selector: 'app-tank-detail',
  templateUrl: './tank-detail.component.html',
  styleUrls: ['./tank-detail.component.css']
})
export class TankDetailComponent implements OnInit {

  tank?: any;
  diff: any

  constructor(
    private route: ActivatedRoute,
    private tankService: TanksService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getTank();
    this.getDuration()
  }

  getTank(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.tankService.getTank(id)
    .subscribe(tank => this.tank = tank);
  }

  getDuration(){    
    const id = this.route.snapshot.paramMap.get('id')
    var json = this.tankService.getDeliveryDate(id)
    this.diff =  json.subscribe()
    // var startDateMoment = moment(startdateString, "DD/MM/YYYY");
    // var deliveryDateMoment = moment(deliveryDateString, "DD/MM/YYYY")
    console.log("Hola")
    // this.diff = startDateMoment.diff(deliveryDateMoment, 'days')

  }

  goBack(): void {
    this.location.back();
  }

  // save(): void {
  //   this.tankService.updateTank(this.tank)
  //     .subscribe(() => this.goBack());
  // }

}
