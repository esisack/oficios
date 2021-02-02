import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { Incidence } from "../model/incidence";
import { ActivityLog } from "../model/activity-log";

@Injectable({
  providedIn: 'root'
})
export class IncidenceService {

  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }
  
  getIncidents(): Observable<Incidence[]> {
    return this.http.get<Incidence[]>(`${this.baseUrl}/incidents`);
  }

  getIncidence(id: number): Observable<Incidence> {
    return this.http.get<Incidence>(`${this.baseUrl}/incidents/${id}`);
  } 

  getData(search: string): Observable<Incidence[]> {
    return this.http.get<Incidence[]>(`${this.baseUrl}/incidents/search${search}`);
  }
 
  getActivities(id: number): Observable<ActivityLog[]> {
    return this.http.get<ActivityLog[]>(`${this.baseUrl}/activities/${id}`);
  }
}
