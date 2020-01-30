import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // todo move to config
  apiUrl = 'https://localhost:44337/api/';

  constructor(private http: HttpClient) {

  }

  get(path: string): Observable<any> {
    const url = this.apiUrl + path;
    return this.http.get<any>(url)
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
}
