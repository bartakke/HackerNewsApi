
import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


export class ServerAPIErrorModel {
  handled: boolean;
  error: any;

  constructor(handled: boolean, error: any) {
    this.handled = handled;
    this.error = error;
  }
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient ) { }

  get<T>(url: string, queryParams?: any): Observable<T> {

    let httpOptions = {
      headers: new HttpHeaders(
        {
          'Content-Type': 'application/json'
        }),
      params: new HttpParams()
    };

    if (queryParams) {
      httpOptions.params = new HttpParams().set('params', JSON.stringify(queryParams))
    }
    return this.http.get<T>(environment.baseurl+url , httpOptions);

  }

  post<T, R>(url: string, request: T): Observable<R> {

    let httpOptions = {
      headers: new HttpHeaders(
        {
          'Content-Type': 'application/json'
        }),
      params: new HttpParams()
    };

    // if (queryParams) {
    //     httpOptions.params = new HttpParams().set('params', JSON.stringify(queryParams))
    // }
    return this.http.post<R>(environment.baseurl+url, request, httpOptions);

  }

}
