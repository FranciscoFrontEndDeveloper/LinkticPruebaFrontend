import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class JsonplaceholderService {

  constructor(private httpClient: HttpClient) {}

  getApiData<T>(apiUrl: string): Observable<T> {
    return this.httpClient.get<T>(apiUrl);
  }
}
