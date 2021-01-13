import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';


import { CategoryValueService } from "src/app/services/category-value.service";

import { CategoryValue } from 'src/app/model/category-value';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-dialog-info',
  templateUrl: './dialog-info.component.html',
  styleUrls: ['./dialog-info.component.scss']
})
export class DialogInfoComponent implements OnInit {

  casesForm: FormGroup;
  areas: CategoryValue[] = []
  sources: CategoryValue[] = []
  types: CategoryValue[] = []
  description: string
  
  selectedArea: string;
  selectedSource: string;
  selectedType: string;

  constructor(
    public dialogRef: MatDialogRef<DialogInfoComponent>,
    private service: CategoryValueService
  ) { }

  ngOnInit() {
    this.getValuesByCategory("AreaIncidencia");

  }

  onSelectArea(id: number) {
    console.log('entro a area')
    this.selectedArea = `area.id=${id}`
    console.log(this.selectedArea) 
    return  this.getValuesBySource("OrigenIncidencia", id);
  }

  onSelectSource(id: number) {
    this.selectedSource = `source.id=${id}` 
    return  this.getValuesByType("TipoIncidencia", id);
  }
 

  onSelectType(id: number) {
    this.selectedType = `type.id=${id}` 
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




close() {
  this.dialogRef.close("Thanks for using me!");
}
}
