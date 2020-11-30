import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public authenticate: boolean = false

  constructor() { }
}
