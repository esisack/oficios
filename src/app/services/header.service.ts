import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  public title: string = "Home"
  public sidebarOpen: boolean = false
  
  constructor() { }
}
