import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CategoryValue } from 'src/app/model/category-value';
import { Incidence } from 'src/app/model/incidence';
import { BusinessTaskService } from 'src/app/services/business-task.service';
import { CategoryValueService } from 'src/app/services/category-value.service';

@Component({
  selector: 'app-confirm-info',
  templateUrl: './confirm-info.component.html',
  styleUrls: ['./confirm-info.component.scss']
})
export class ConfirmInfoComponent implements OnInit {

  @Input() incidence: Incidence
  @Input() option: string;
  @Input() key: string
  @Input() object: Object
  @Input() tareaId: number
  @Output() valueResponse: EventEmitter<string> = new EventEmitter();

  constructor(private taskService: BusinessTaskService) { }

  ngOnInit(): void {
   
  }

  onConfirm(conf: Object) {
    if (conf) {
      this.taskService.getTask(this.tareaId, this.key, conf).subscribe(data => {
        console.log(data)
      })
    }
  }

}
