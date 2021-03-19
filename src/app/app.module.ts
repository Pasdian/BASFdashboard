import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeadingComponent } from './components/common/heading/heading.component';
import { TankTableComponent } from './components/tank-table/tank-table.component';
import { TanksComponent } from './components/tanks/tanks.component';

import { TanksService } from './services/tanks.service';
import { FormsModule } from '@angular/forms';
import { TankDetailComponent } from './components/tank-detail/tank-detail.component';
import { MessagesComponent } from './components/messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HeadingComponent,
    TankTableComponent,
    TanksComponent,
    TankDetailComponent,
    MessagesComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule],
  providers: [TanksService],
  bootstrap: [AppComponent],
})
export class AppModule {}
