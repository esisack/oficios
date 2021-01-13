import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ImageService {
 
  baseUrl = environment.imageUrl
 
  constructor(private httpClient: HttpClient) { }

  getImage(imageUrl: string): Observable<Blob> {
    return this.httpClient.get(`${this.baseUrl}${imageUrl}`, { responseType: 'blob' });
  }

}
