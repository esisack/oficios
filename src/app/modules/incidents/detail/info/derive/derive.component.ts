import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CategoryValue } from 'src/app/model/category-value';
import { Incidence } from 'src/app/model/incidence';
import { BusinessTaskService } from 'src/app/services/business-task.service';
import { CategoryValueService } from 'src/app/services/category-value.service';

@Component({
  selector: 'app-derive',
  templateUrl: './derive.component.html',
  styleUrls: ['./derive.component.scss']
})
export class DeriveComponent implements OnInit {

  @Input() incidence: Incidence
  @Input() option: string;
  @Input() key: string
  @Input() object: Object
  @Input() tareaId: number
  @Output() valueResponse: EventEmitter<string> = new EventEmitter();

  casesForm: FormGroup;
  areas: CategoryValue[] = []
  sources: CategoryValue[] = []
  types: CategoryValue[] = []
  subTypes: CategoryValue[] = []
  description: string
  
  selectedArea: string;
  selectedSource: string;
  selectedType: string;

  constructor(
    private service: CategoryValueService,
    private taskService: BusinessTaskService
    ) { }

  ngOnInit(): void {
    this.getValuesByCategory("AreaIncidencia");
  }

  onSelectArea(id: number) {

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
  
  onConfirm(conf: Object) {
    if (conf) {
      this.taskService.getTask(this.tareaId, this.key, conf).subscribe(data => {
        console.log(data)
      })
    }
  }

}
