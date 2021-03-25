import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TanksComponent } from './components/tanks/tanks.component';
import { TankTableComponent } from './components/tank-table/tank-table.component';
import { TankDetailComponent } from './components/tank-detail/tank-detail.component';
import { SolventeTableComponent } from './components/solvente-table/solvente-table.component';


const routes: Routes = [
  {path: 'tanks', component: TanksComponent},
  {path: 'tanks-visual', component: TankTableComponent},
  {path: 'tanks-visual-solvent', component: SolventeTableComponent},
  {path: 'detail/:id', component: TankDetailComponent },
  {path: '**', pathMatch: 'full', redirectTo: 'tanks'},
];



@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
