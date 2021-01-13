import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';

import { Router } from '@angular/router';
import { Incidence } from 'src/app/model/incidence';
import { IncidenceService } from "src/app/services/incidence.service";

@Component({
  selector: 'app-control-grid',
  templateUrl: './control-grid.component.html',
  styleUrls: ['./control-grid.component.scss']
})
export class ControlGridComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @Input() option: string;
  @Output() valueResponse: EventEmitter<string> = new EventEmitter();
  @Input() search: string;
  @Output() searchChamge: EventEmitter<string> = new EventEmitter()

  @Input()
  set event(event: Event) {
    if (event) {
      console.log(this.search)
      this.refresh('hola');
    }
  }

  incidence: Incidence;
  incidents: Incidence[] = [];
  total: number;

  constructor(
    private service: IncidenceService,
    private router: Router
    ) {  }

  ngOnInit(): void {
    this.getIncidents()
  }

  ngAfterViewInit() {
 
  }

  getIncidents() {
    this.service.getIncidents().subscribe(data => {
      this.incidents = data 
    })
  }

 onSelect(id: number){
    this.router.navigate(['/detail', id]);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
 
  }

  changeOption(option: string) {
    this.valueResponse.emit(option);
  }

  refreshIncidents(search: string) {

  }

  refresh(event) {
    console.log(this.search)
    this.refreshIncidents( this.search);
  } 
}
