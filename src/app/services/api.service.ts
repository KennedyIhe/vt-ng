import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { AppConfig } from '../configs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // todo move to config
  // apiUrl = 'https://localhost:44337/api/';

  constructor(private http: HttpClient) {

  }

  get(path: string): Observable<any> {
    const url = AppConfig.apiUrl + path;
    return this.http.get<any>(url)
      .pipe(
        retry(0),
        catchError(this.handleError)
      );
  }

  post(path: string, obj: any): Observable<any> {
    const url = AppConfig.apiUrl + path;
    return this.http.post<any>(url, obj, this.getHttpOptions())
      .pipe(
        retry(0),
        catchError(this.handleError)
      );
  }

  handleError(error) {
    console.log(error);
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  private getHttpOptions() {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Current-User-Id': ''
      })
    };
    return options;
  }
}
