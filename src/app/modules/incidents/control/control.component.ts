import { SelectionModel } from '@angular/cdk/collections';
import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Incidence } from 'src/app/model/incidence';
import { IncidenceService } from "src/app/services/incidence.service";

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.scss']
})
export class ControlComponent implements OnInit {
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
  displayedColumns: string[] = ['id', 'source', 'street', 'addressNumber', 'actions'];
  dataSource = new MatTableDataSource(this.incidents);
  total: number;

  constructor(
    private service: IncidenceService,
    private router: Router
    ) {  }

  ngOnInit(): void {
    this.getIncidents()
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  getIncidents() {
    this.service.getIncidents().subscribe(data => {
      this.dataSource.data = data as Incidence[]
    })
  }

 onSelect(id: number){
    this.router.navigate(['/detail', id]);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  changeOption(option: string) {
    this.valueResponse.emit(option);
  }

  refreshIncidents(search: string) {
    this.service.getData(search).subscribe( data => {
      this.dataSource.data = data as Incidence[]
    })
  }

  refresh(event) {
    console.log(this.search)
    this.refreshIncidents( this.search);
  } 
}
