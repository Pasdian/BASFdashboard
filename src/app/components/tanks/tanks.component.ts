import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TanksService, Tank } from 'src/app/services/tanks.service';

@Component({
  selector: 'app-tanks',
  templateUrl: './tanks.component.html',
  styleUrls: ['./tanks.component.css']
})
export class TanksComponent implements OnInit {

  tanks: Tank[] = [];

  constructor(private tanksSerivce: TanksService) {
  }

  ngOnInit(): void {
    this.tanks = this.tanksSerivce.getTanks();
    console.log(this.tanks);
  }

}