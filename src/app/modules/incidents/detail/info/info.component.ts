import { Component, EventEmitter, Inject, Input, NgZone, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Incidence } from 'src/app/model/incidence';
import { IncidenceService } from 'src/app/services/incidence.service';
import { ConfirmService } from "src/app/services/confirm.service";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogInfoComponent } from '../dialog-info/dialog-info.component';
import { CategoryValue } from 'src/app/model/category-value';
import { CategoryValueService } from 'src/app/services/category-value.service';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  @Input() incidence: Incidence
  @Input() option: string;
  @Output() valueResponse: EventEmitter<string> = new EventEmitter();

  derivar: boolean
  desechar: boolean

  flow: string
  action: string
  of_valido: boolean
  algo: string

  constructor( ) { }

  ngOnInit() {}


}


