import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { BusinessTask } from '../model/business-task';

@Injectable({
  providedIn: 'root'
})
export class BusinessTaskService {
  
  baseUrl = environment.baseUrl;
  public currentTask: BusinessTask

  constructor(private http: HttpClient) { }
  
  getTasks(): Observable<BusinessTask[]> {
    return this.http.get<BusinessTask[]>(`${this.baseUrl}/businessTasks`);
  }
 
  getTask(taskId: number, key: string, object: Object): any{
    return this.http.get(`${this.baseUrl}/businessTasks/${taskId}/${key}/${object}`);
  }

  getCurrentTask(taskId: number): Observable<BusinessTask>{
    return this.http.get<BusinessTask>(`${this.baseUrl}/businessTasks/${taskId}`);
  }

  getProcessVariables(piId: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/variables/${piId}`)
  }

}
