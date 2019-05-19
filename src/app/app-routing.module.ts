import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroesComponent }      from './heroes/heroes.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';

import { CalculatorComponent }  from './calculator/calculator.component';
import { LoanApplyComponent }  from './loan-apply/loan-apply.component';

const routes: Routes = [
  { path: '', redirectTo: '/calculator', pathMatch: 'full' },
  { path: 'calculator', component: CalculatorComponent },
  { path: 'apply', component: LoanApplyComponent },

  // { path: 'dashboard', component: DashboardComponent },
  // { path: 'detail/:id', component: HeroDetailComponent },
  // { path: 'heroes', component: HeroesComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
