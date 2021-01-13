import { Component, Inject, Input, NgZone, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Incidence } from 'src/app/model/incidence';
import { IncidenceService } from 'src/app/services/incidence.service';
import { ConfirmService } from "src/app/services/confirm.service";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogInfoComponent } from '../dialog-info/dialog-info.component';

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

  constructor(
    public dialog: MatDialog, 
    private ngZone: NgZone, 
    private confirmService: ConfirmService
    ) { }

  ngOnInit() {
    
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogInfoComponent, {
      width: '450px'});

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  onDenied($key){
    this.confirmService.openConfirmDialog('Esta seguro de denegar el oficio')
    .afterClosed().subscribe(res =>{
      if(res){
        // this.service.deleteEmployee($key);
        // this.notificationService.warn('! Deleted successfully');
      }
    });
  }
}


