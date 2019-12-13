import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardsComponent } from './cards/cards.component';
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
    CardsComponent,
    FactionDetailComponent,
    MessagesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
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
