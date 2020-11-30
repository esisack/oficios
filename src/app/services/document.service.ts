import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { clear } from 'console';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';


import { Document } from "../model/document";

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }
  
  getCategories(): Observable<Document[]> {
    return this.http.get<Document[]>(`${this.baseUrl}/documents`);
  }
}
