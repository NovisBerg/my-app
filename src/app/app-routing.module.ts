import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CardsComponent } from './cards/cards.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FactionDetailComponent } from './faction-detail/faction-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'cards', component: CardsComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: FactionDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
})
export class AppRoutingModule { }
