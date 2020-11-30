import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { Street } from "../model/street";

@Injectable({
  providedIn: 'root'
})
export class StreetService {
  
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }
  
  getStreets(): Observable<Street[]> {
    return this.http.get<Street[]>(`${this.baseUrl}/streets`);
  }
}
