import { RouterModule, Routes } from '@angular/router';
import { TanksComponent } from "../app/components/tanks/tanks.component";
import { TankTableComponent } from "../app/components/tank-table/tank-table.component";

const APP_ROUTES: Routes = [
    {path: 'home', component: TankTableComponent},
    {path: 'tanks-list', component: TanksComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'home'},
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);