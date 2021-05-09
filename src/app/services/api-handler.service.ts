import {Inject, Injectable, LOCALE_ID} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {catchError, map} from 'rxjs/operators';

import {environment} from '../../environments/environment';

// import { CookieService } from 'ngx-cookie-service';


@Injectable({
  providedIn: 'root',
})
export class ApiHandlerService {
  // API_URL: string = environment.APIEndpoint + this.configService.defaultConfig.language + '/api';
  API_URL: string = environment.apiURL + 'api/v1/';
  
  constructor(private http: HttpClient) {
  }

  public setHeaders(isJson: boolean) {
    let headerConfig = {'Accept': 'application/json'};

    if (isJson) {
      headerConfig['Content-Type'] = 'application/json';
    }
    // if (this.cookieService.check('Token')) {
    //   let token: string = this.cookieService.get('Token');
    //   headerConfig['Authorization'] = 'Token ' + token;
    // }

    return new HttpHeaders(headerConfig);
  }

  public handleError(error: any) {
    console.log('error ', error);
    // this.loaderService.displayLoader(false);
  }

  // get(path: string, params = {}): Observable<any> {
  //   return this.http.get(`${this.API_URL}${path}`, {
  //     headers: this.setHeaders(true),
  //     params: new HttpParams({
  //       fromObject: params,
  //     }),
  //   })
  //     .pipe(map(res => res),
  //       catchError((error) => {
  //         this.handleError(error);
  //         return error;
  //       }));
  // }

  getFile(path: string, params = {}): Observable<any> {
    return this.http.get(`${this.API_URL}${path}`, {
      headers: this.setHeaders(false),
      params: new HttpParams({
        fromObject: params,
      }),
      responseType: 'blob',
    }).pipe(map(res => res));
  }

  // get(path: string, params = {}): Observable<any> {
  //   return this.http.get(`${path}`, {
  //     headers: this.setHeaders(true),
  //     params: new HttpParams({
  //       fromObject: params,
  //     }),
  //   }).pipe(map(res => res));
  // }

  get(path: string, params = {}): Observable<any> {
    return this.http.get(`${path}`, {
      headers: this.setHeaders(false),
      params: new HttpParams({
        fromObject: params,
      }),
    }).pipe(map(res => res));
  }

  post(path: string, body: any = {}): Observable<any> {
    return this.http.post(`${this.API_URL}${path}`, JSON.stringify(body), {headers: this.setHeaders(true)})
      // .pipe(catchError((error) => of(`I caught: ${error}`)));
      .pipe(map(res => res));
  }

  put(path: string, body: any = {}): Observable<any> {
    return this.http.put(`${this.API_URL}${path}`, JSON.stringify(body), {headers: this.setHeaders(true)})
      // .pipe(catchError((error) => of(`I caught: ${error}`)));
      .pipe(map(res => res));
  }

  patch(path: string, body: any = {}): Observable<any> {
    return this.http.patch(`${this.API_URL}${path}`, JSON.stringify(body), {headers: this.setHeaders(true)})
      // .pipe(catchError((error) => of(`I caught: ${error}`)));
      .pipe(map(res => res));
  }

  patchImg(path: string, body: any = {}, setApplicationJson: boolean): Observable<any> {
    return this.http.patch(`${this.API_URL}${path}`, body, {headers: this.setHeaders(setApplicationJson)})
      // .pipe(catchError((error) => of(`I caught: ${error}`)));
      .pipe(map(res => res));
  }

  postImg(path: string, body: any = {}, setApplicationJson: boolean): Observable<any> {
    return this.http.post(`${this.API_URL}${path}`, body, {headers: this.setHeaders(setApplicationJson)})
      // .pipe(catchError((error) => of(`I caught: ${error}`)));
      .pipe(map(res => res));
  }

  delete(path: string, body: any = {}): Observable<any> {
    return this.http.delete(`${this.API_URL}${path}`, {headers: this.setHeaders(true)})
      // .pipe(catchError((error) => of(`I caught: ${error}`)));
      .pipe(map(res => res));
  }

  // put(path: string, body: any, isJson): Observable<any> {
  //   return this.http.put(`${environment.apiURL}${path}`, body, {headers: this.setHeaders(isJson)})
  //     .pipe(catchError((error) => of(`I caught: ${error}`)));
  // }
}
