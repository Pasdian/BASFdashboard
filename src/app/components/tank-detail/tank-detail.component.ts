import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TanksService } from 'src/app/services/tanks.service';
import { Location } from '@angular/common';
import { Tank } from "../../Tank";



@Component({
  selector: 'app-tank-detail',
  templateUrl: './tank-detail.component.html',
  styleUrls: ['./tank-detail.component.css']
})
export class TankDetailComponent implements OnInit {

  tank?: Tank;

  constructor(
    private route: ActivatedRoute,
    private tankService: TanksService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getTank();
  }

  getTank(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.tankService.getTank(id)
    .subscribe(tank => this.tank = tank);
  }

  goBack(): void {
    this.location.back();
  }

  // save(): void {
  //   this.tankService.updateTank(this.tank)
  //     .subscribe(() => this.goBack());
  // }

}
