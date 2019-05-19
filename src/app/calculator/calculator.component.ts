import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { LoanDetails } from './../../loan-details';
@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  loanDetails:LoanDetails = {
    amount: 10000,
    interest: 12,
    duration: 24,
  }

  constructor() { }

  ngOnInit() {
  }

}
