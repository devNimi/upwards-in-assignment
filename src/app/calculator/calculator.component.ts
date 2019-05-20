import { inject } from '@angular/core/testing';
import { Component, OnInit } from '@angular/core';

import * as CanvasJS from '../../assets/lib/canvasjs.min';

import { calculateEmi, checkProperties} from '../utils/utils';
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
    this.updateChartData()
  }
  getMonthlyEmi() {
    return calculateEmi(this.loanDetails);
  }

  getTotalInterest() {
    return this.getMonthlyEmi() * this.loanDetails.duration
  }

  updateChartData () {
    console.log('call to update chart data was called');

  }
  constructor() { }

  ngOnInit() {
    this.monthlyEmi = this.getMonthlyEmi();
    this.isInputEmpty = !checkProperties(this.loanDetails);
    const {amount} = this.loanDetails
    let chart = new CanvasJS.Chart("chartContainer", {
      theme: "light2",
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: "Monthly EMI"
      },
      data: [{
        type: "pie",
        showInLegend: true,
        toolTipContent: "<b>{name}</b>: ₹{y} (#percent%)",
        indexLabel: "{name} - #percent%",
        dataPoints: [
          { y: this.loanDetails.amount, name: "Prinicipal Loan Amount" },
          { y: this.getTotalInterest() - amount, name: "Total Interest" },
        ]
      }]
    });
    chart.render();
  }

}
