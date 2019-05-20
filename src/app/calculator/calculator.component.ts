import { inject } from '@angular/core/testing';
import { Component, OnInit } from '@angular/core';

import { calculateEmi, checkProperties} from '../utils/utils'
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
  monthlyEmi: number;
  // check all feild in EMI calculator are filled
  isInputEmpty: boolean;

  updateLoanDetails(e) {
    this.monthlyEmi = this.getMonthlyEmi();
    this.isInputEmpty = !checkProperties(this.loanDetails);
  }
  getMonthlyEmi() {
    return calculateEmi(this.loanDetails);
  }


  constructor() { }

  ngOnInit() {
    this.monthlyEmi = this.getMonthlyEmi();
    this.isInputEmpty = !checkProperties(this.loanDetails);
  }

}
