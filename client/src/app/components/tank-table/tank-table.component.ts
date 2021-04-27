import { Component, OnInit } from '@angular/core';
import { TanksService } from 'src/app/services/tanks.service';

@Component({
  selector: 'app-tank-table',
  templateUrl: './tank-table.component.html',
  styleUrls: ['./tank-table.component.css']
})
export class TankTableComponent implements OnInit {

  constructor(private tanksSerivce: TanksService) { }

  ngOnInit(): void {
    
  }

  getSemaphore(id:string):string{

    return "danger"

  }

}
