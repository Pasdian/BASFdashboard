import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TanksService } from 'src/app/services/tanks.service';
import { Tank } from '../../Tank';
import { TANKS } from '../../mock-tanks';
import { MessageService } from 'src/app/services/message.service';


@Component({
  selector: 'app-tanks',
  templateUrl: './tanks.component.html',
  styleUrls: ['./tanks.component.css'],
})
export class TanksComponent implements OnInit {

  selectedTank?: Tank

  tanks: Tank[] = [];

  constructor(private tanksSerivce: TanksService, private messageService: MessageService) {}


  onSelect(tank: Tank): void {
    this.selectedTank = tank;
    this.messageService.add(`HeroesComponent: Selected tank id=${tank.id}`);
  }

 
  getTanks(): void {
    this.tanksSerivce.getTanks()
      .subscribe(tanks => this.tanks = tanks);
  }

  ngOnInit(): void {
    this.getTanks();
  }
}
