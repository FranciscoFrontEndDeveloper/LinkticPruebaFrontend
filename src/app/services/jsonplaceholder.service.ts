import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Jsonplaceholderinterface } from '../jsonplaceholderinterface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class JsonplaceholderService {
  private jsonApiUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private httpClient: HttpClient) {}

  getPostJson(): Observable<Jsonplaceholderinterface[]> {
    return this.httpClient.get<Jsonplaceholderinterface[]>(this.jsonApiUrl);
  }
}
