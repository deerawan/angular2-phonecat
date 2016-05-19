import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Phone } from './phone';

@Injectable()
export class PhoneService {

  constructor(private http: Http) {}

  getPhones(): Observable<Phone[]> {
    return this.http.get('public/phones/phones.json')
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  private extractData(res: Response) {
    if (res.status < 200 || res.status >= 300) {
      throw new Error('Response Status: ' + res.status);
    }
    let body = res.json();
    return body.data || {};
  }

  private handleError(error: any) {
    let errMsg = error.message || 'server error';
    console.log(errMsg);
    return Observable.throw(errMsg);
  }

}
