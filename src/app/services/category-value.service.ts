import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { CategoryValue } from "../model/category-value";

@Injectable({
  providedIn: 'root'
})
export class CategoryValueService  {

  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }
  
  getCategories(): Observable<CategoryValue[]> {
    return this.http.get<CategoryValue[]>(`${this.baseUrl}/categoryValues`);
  }
 
  getValuesByCategory(category: string): Observable<CategoryValue[]> {
    return this.http.get<CategoryValue[]>(`${this.baseUrl}/categoryValues/category/${category}`);
  }

  getData(category: string, id: number): Observable<CategoryValue[]> {
    let father = ( id != null) ? `&father.id=${id}` : ``
    return this.http.get<CategoryValue[]>(`${this.baseUrl}/categories/search?category=${category}${father}`)
  }
  
}
