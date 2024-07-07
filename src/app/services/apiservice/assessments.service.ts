import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssessmentsService {

  constructor(private http: HttpClient) {}

  fetchData(apiEndpoint: string): Observable<any> {
    return this.http.get<any>(apiEndpoint);
  }
}
