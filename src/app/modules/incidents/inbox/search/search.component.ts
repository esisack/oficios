import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';

import { MatCalendarCellClassFunction } from '@angular/material/datepicker';

import { CategoryValueService } from "src/app/services/category-value.service";
import { StreetService } from "src/app/services/street.service";
import { UserService } from "src/app/services/user.service";

import { CategoryValue } from 'src/app/model/category-value';
import { Street } from 'src/app/model/street';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Input() search: string
  @Output() valueResponse = new EventEmitter<string>();
  @Output() querydata = new EventEmitter<string>();
  
  @Output() eventChange = new EventEmitter<Event>();

  onClick(event: Event) {
    this.eventChange.emit(event);
  }

  panelOpenState = false;
  streetControl: FormControl;
  casesForm: FormGroup;
  areas: CategoryValue[] = []
  sources: CategoryValue[] = []
  types: CategoryValue[] = []
  streets: Street[]
  users: User[]
  filteredStreets: Observable<Street[]>;

  selectedArea: number;
  selectedOrigin: number;
  selectedType: number;
  selectedStreet: number;
  selectedUser: number;

  constructor(
    private service: CategoryValueService, 
    private streetService: StreetService,
    private userService: UserService) {  }


  ngOnInit() {
    this.getValuesByCategory("AreaIncidencia");
    this.getStreets();
    this.getUsers();
  }

  onSelectArea(id: number) {
    console.log("este es el id"+id)
    return  this.getValuesBySource("OrigenIncidencia", id);
  }

  onSelectSource(id: number) {
    console.log("este es el id"+id)
    return  this.getValuesByType("TipoIncidencia", id);
  }

  getValuesByCategory(category: string) {
    this.service.getValuesByCategory(category).subscribe(data => {
        this.areas = data
    })
  }

  getValuesBySource(category: string, id: number) {
    this.service.getData(category, id).subscribe( data => {
      this.sources = data
    })
  }

  getValuesByType(category: string, id: number) {
    this.service.getData(category, id).subscribe( data => {
      this.types = data
    })
  }

  getStreets() {
    this.streetService.getStreets().toPromise().then(data => {
      this.streets = data;
    })
  }
  
  getUsers() {
    this.userService.getUsers().subscribe(data => {
      this.users = data;
    })
  }
  
  dateClass: MatCalendarCellClassFunction<Date> = (cellDate, view) => {
    // Only highligh dates inside the month view.
    if (view === 'month') {
      const date = cellDate.getDate();

      // Highlight the 1st and 20th day of each month.
      return (date === 1 || date === 30) ? 'example-custom-date-class' : '';
    }

    return '';
  }

  onSubmit() {
    
  }

}
