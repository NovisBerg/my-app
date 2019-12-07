import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FactionsComponent } from './factions/factions.component';
import { FactionDetailComponent } from './faction-detail/faction-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {
  NzButtonModule,
  NzCardModule,
  NzDescriptionsModule,
  NzListModule,
  NzMenuModule,
  NzTypographyModule
} from 'ng-zorro-antd';


@NgModule({
  declarations: [
    AppComponent,
    FactionsComponent,
    FactionDetailComponent,
    MessagesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NzButtonModule,
    NzMenuModule,
    NzListModule,
    NzCardModule,
    NzTypographyModule,
    NzDescriptionsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
