import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class ImageService {
 
  baseUrl = 'http://localhost:8081/s3/download?fileName=images/ba-fdd.jpg'
 
  constructor(private httpClient: HttpClient) { }

  getImage(imageUrl: string): Observable<Blob> {
    return this.httpClient.get(this.baseUrl, { responseType: 'blob' });
  }

}
