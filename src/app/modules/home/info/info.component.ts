import { Component, Input, OnInit } from '@angular/core';
import { Incidence } from 'src/app/model/incidence';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  @Input() incidence: Incidence

  constructor() { }

  ngOnInit() {
    
  }
}
