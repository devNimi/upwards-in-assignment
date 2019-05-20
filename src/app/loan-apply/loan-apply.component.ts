import { FormData } from './../formData';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { LoanApplyService } from '../loan-apply.service'
@Component({
  selector: 'app-loan-apply',
  templateUrl: './loan-apply.component.html',
  styleUrls: ['./loan-apply.component.css']
})
export class LoanApplyComponent implements OnInit {
  // refers to data object if user comes from calculator page
  state$: Observable<any>;
  isSubmitted = false;
  // initial form data
  // formData = {
  //   name: 'Nimesh Pancholi',
  //   email: 'dsfsdf@gmail.com',
  //   phone: 9024442096,
  //   pan: 'BZHQQ0907C',
  //   address: 'abc, India',
  //   salary: 1234567,
  //   loanAmount: 12345,
  //   loanTenure: 12,
  //   loanInterest: 12,
  // }
  formData = {
    name: '',
    email: '',
    phone: null,
    pan: null,
    address: '',
    salary: null,
    loanAmount: null,
    loanTenure: null,
    loanInterest: null,
  }

  // form controls validators
  // note: so many validation are add to make validation robust for future case
  name = new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*')]);
  email = new FormControl('', [Validators.required, Validators.email]);
  phone = new FormControl('', [Validators.required, Validators.pattern('^([0|\+[0-9]{1,5})?([7-9][0-9]{9})$')]);
  pan = new FormControl('', [Validators.required, Validators.pattern('^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$')]);
  address = new FormControl('', [Validators.required]);
  salary = new FormControl('', [Validators.required]);
  loanAmount = new FormControl('', [Validators.required]);
  loanTenure = new FormControl('', [Validators.required]);
  loanInterest = new FormControl('', [Validators.required]);

  // validators, made extended to keep future validations in mind
  getNameErrorMessage() {
    return this.name.hasError('required') ? 'You must enter your name' :
      this.name.hasError('pattern') ? 'Not a valid name' :
        '';
  }
  getEmailErrorMessage() {
    return this.email.hasError('required') ? 'You must enter an email address' :
      this.email.hasError('email') ? 'Not a valid email' :
        '';
  }
  getPhoneErrorMessage() {
    return this.phone.hasError('required') ? 'You must enter your phone number' :
      this.phone.hasError('pattern') ? 'Not a valid phone number' :
        '';
  }
  getPanErrorMessage() {
    return this.pan.hasError('required') ? 'You must enter your PAN number' :
      this.pan.hasError('pattern') ? 'Not a valid pan number' :
        '';
  }
  getSalaryErrorMessage() {
    return this.pan.hasError('required') ? 'You must enter your Salary' :
      this.pan.hasError('pattern') ? 'Not a valid Salary' :
        '';
  }
  getAddressErrorMessage() {
    return this.pan.hasError('required') ? 'You must enter your address' :
      this.pan.hasError('pattern') ? 'Not a valid address' :
        '';
  }
  getLoanAmountErrorMessage() {
    return this.pan.hasError('required') ? 'You must enter Loan amount' :
      this.pan.hasError('pattern') ? 'Not a valid Loan amount' :
        '';
  }
  getLoanTenureErrorMessage() {
    return this.pan.hasError('required') ? 'You must enter Loan Tenure' :
      this.pan.hasError('pattern') ? 'Not a valid Loan Tenure' :
        '';
  }
  getLoanInterestErrorMessage() {
    return this.pan.hasError('required') ? 'You must enter Loan Interest' :
      this.pan.hasError('pattern') ? 'Not a valid Loan Interest' :
        '';
  }

  isFormValid() {
    const V = "VALID";
    return this.name.status === V && this.email.status === V && this.phone.status === V &&
      this.pan.status === V && this.salary.status === V && this.address.status === V &&
      this.loanAmount.status === V && this.loanTenure.status === V && this.loanInterest.status === V;
  }

  constructor(public activatedRoute: ActivatedRoute,private  _loanApplyService: LoanApplyService) { }

  onSubmit() {
    this.isSubmitted = true;
    this._loanApplyService.apply(this.formData)
      .subscribe(
        data => console.log('sucsess', data),
        error => console.log('Error!', error)
      )
  }

  preFillData(data) {
    const { amount, interest, duration} = data;
    this.formData.loanAmount = amount;
    this.formData.loanInterest = interest;
    this.formData.loanTenure = duration;
    }




  ngOnInit() {
    this.state$ = this.activatedRoute.paramMap.pipe(
      map(() => window.history.state)
    )
    // set values if user came from calculator page
    this.state$
      .subscribe(
        data => this.preFillData(data),
        error => console.log('Erssdsror!', error)
      )
  }

}
