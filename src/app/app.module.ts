import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeadingComponent } from './components/common/heading/heading.component';
import { TankTableComponent } from './components/tank-table/tank-table.component';
import { TanksComponent } from './components/tanks/tanks.component';

import { APP_ROUTING } from "./app.routes";

@NgModule({
  declarations: [
    AppComponent,
    HeadingComponent,
    TankTableComponent,
    TanksComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
