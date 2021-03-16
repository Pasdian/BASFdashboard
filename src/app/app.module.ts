import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeadingComponent } from './components/common/heading/heading.component';
import { TankTableComponent } from './components/tank-table/tank-table.component';
import { TanksComponent } from './components/tanks/tanks.component';
import { APP_ROUTING } from './app.routes';

import { TanksService } from './services/tanks.service';
import { FormsModule } from '@angular/forms';
import { TankDetailComponent } from './components/tank-detail/tank-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadingComponent,
    TankTableComponent,
    TanksComponent,
    TankDetailComponent,
  ],
  imports: [BrowserModule, APP_ROUTING, FormsModule],
  providers: [TanksService],
  bootstrap: [AppComponent],
})
export class AppModule {}
