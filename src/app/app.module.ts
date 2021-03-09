import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeadingComponent } from './components/common/heading/heading.component';
import { TankTableComponent } from './components/tank-table/tank-table.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadingComponent,
    TankTableComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
