import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

import { SideWalk } from "../model/side-walk";

@Injectable({
  providedIn: 'root'
})
export class SideWalkService {
 
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }
  
  getCategories(): Observable<SideWalk[]> {
    return this.http.get<SideWalk[]>(`${this.baseUrl}/sidewalks`);
  }
}
