import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { BusinessTask } from 'src/app/model/business-task';
import { Incidence } from 'src/app/model/incidence';
import { BusinessTaskService } from 'src/app/services/business-task.service';


@Component({
  selector: 'app-view-info',
  templateUrl: './view-info.component.html',
  styleUrls: ['./view-info.component.scss']
})
export class ViewInfoComponent implements OnInit {

  @Input() incidence: Incidence
  @Input() option: string;
  @Output() valueResponse: EventEmitter<string> = new EventEmitter();
  @Output() valueTarea: EventEmitter<number> = new EventEmitter();
  @Output() valueKey: EventEmitter<string> = new EventEmitter();
  @Output() valueObject: EventEmitter<Object> = new EventEmitter();

  taskId: number = 18
  tareaId: number
  key: string 
  object: Object
  tarea: BusinessTask

  constructor(
      private taskService: BusinessTaskService,
      private router: Router
      ) { }

  ngOnInit(): void {
    this.tarea = this.taskService.currentTask
    console.log(this.tarea)
    this.selectKey()
  }

  changeOption(option: string) {
    this.valueResponse.emit(option);
  }

  selectKey() {
    console.log("entrando a tareas")
    console.log(this.tarea.name)
    if (this.tarea.name == "Cruce de informacion") {
      this.key = "flujo"
    }
    if (this.tarea.name == "Validar Oficio (Admin)") {
      this.key = "valido"
    }
    if (this.tarea.name == "Validar Incidencia (Analista)") {
      this.key = "es_valido"
    }
    if (this.tarea.name == "Analizar Incidenncia (Adm)") {
      this.key = "flujo_adm"
    }
    if (this.tarea.name == "Analizar Incidencia (Analista)") {
      this.key = "flujo_analista"
    }
    if (this.tarea.name == "Derivar Oficio") {
      this.key = "of_deriva"
    }
    if (this.tarea.name == "Derivar Incidente") {
      this.key = "in_deriva"
    }
    if (this.tarea.name == "Iniciar Reclamo") {
      this.key = "reclamo"
    }
  }

  onValidate(object: Object) {
    this.object = object
    
    if (object == 'derivar') {
      this.option = "derive"
      this.taskService.getTask(this.tarea.id, this.key, this.object).subscribe(data => {
        console.log(data)
      })
      this.key = "of_derivado"
      this.tareaId = this.tarea.id + 1
    } else  {
      this.option = "confirm"
      this.tareaId = this.tarea.id
    }

    this.valueResponse.emit(this.option)
    this.valueTarea.emit(this.tareaId)
    this.valueKey.emit(this.key)
    this.valueObject.emit(this.object)
  }

  onConfirm(conf: boolean) {
    console.log(conf)
    if (conf) {
      this.taskService.getTask(this.tarea.id, this.key, conf).subscribe(data => {
        console.log(data)
        this.router.navigate(['/'])
      })
    }
  }

  onCancel(key: string) {
    this.key = key
  }

}
