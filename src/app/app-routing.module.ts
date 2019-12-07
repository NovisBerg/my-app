import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FactionsComponent } from './factions/factions.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FactionDetailComponent } from './faction-detail/faction-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'factions', component: FactionsComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: FactionDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
})
export class AppRoutingModule { }
