import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private apiUrl: string = 'http://www.omdbapi.com/?apikey=d2a04ea9'

  constructor(private httpClient: HttpClient) { }

  getRequestApi(): Observable<any> {
    return this.httpClient.get<any>(this.apiUrl);
  }
}
