import {Injectable} from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import * as apiCalls from '../constants/ApiCalls';

import { SignatureMenuInterface } from '../interface/SignatureMenuInterface';
import { CustomMenuInterface } from '../interface/CustomMenuInterface';

@Injectable()
export class HttpService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private getSigMenusUrl = apiCalls.SIGATURE_MENUS;
  private getCustomMenusUrl = apiCalls.CUSTOM_MENUS;

  constructor(private http: Http) { }

  //Get all signature kottu
  getAllSignatureMenus(): Promise<SignatureMenuInterface[]> {
    return this.http.get(this.getSigMenusUrl, {headers: this.headers})
      .toPromise()
      .then(response => response.json() as SignatureMenuInterface[])
      .catch(this.handleError);
  }

  //Get all custom kottu
  getAllCustomMenus(): Promise<CustomMenuInterface[]> {
    return this.http.get(this.getCustomMenusUrl, {headers: this.headers})
      .toPromise()
      .then(response => [response.json()] as CustomMenuInterface[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
  //
  // getAllSignatureMenus(url){
  //   return this.http.prototype.get(url).map((res) => res.json());
  // }
}
