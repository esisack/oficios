import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

import { NavService } from '../../services/nav.service';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  @ViewChild('appDrawer') appDrawer: ElementRef;
  isExpanded = false;
  element: HTMLElement;

  userid: number;
  sideBarOpen = true
  photoUrl: string;
  name: string;

  constructor(private router: Router,
      private authService: AuthService,
      private navService: NavService
      ) { }

  ngOnInit() {
  }

  toggleActive(event:any){
 
    event.preventDefault();
    if(this.element !== undefined){
      this.element.style.backgroundColor = "white"
      this.element.style.color = "gray"
      this.element.style.fontWeight = "bold"
    } 
    var target = event.currentTarget
    target.style.backgroundColor = "#00B9F1"
    target.style.color = "white"
    this.element = target
  }

  sideBarToggler(event: Event) {
    this.sideBarOpen = !this.sideBarOpen;
  }

  ngAfterViewInit() {
    this.navService.appDrawer = this.appDrawer;
  }
}
