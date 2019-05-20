import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { HttpClientModule }  from '@angular/common/http';
import { FormsModule, ReactiveFormsModule }    from '@angular/forms';


import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
import { HeroesComponent }      from './heroes/heroes.component';
import { MessagesComponent }    from './messages/messages.component';

// mateiral UI imrpots
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';


import { AppRoutingModule }     from './app-routing.module';
import { LoanApplyComponent } from './loan-apply/loan-apply.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    LoanApplyComponent,
    CalculatorComponent,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
