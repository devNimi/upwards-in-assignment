import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { FormData } from './formData';

@Injectable({
  providedIn: 'root'
})
export class LoanApplyService {

  _url = 'http://localhost:3000/apply';
  constructor(private _http: HttpClient) { }

  apply(formData: FormData) {
    return this._http.post<any>(this._url, formData)
  }
}
