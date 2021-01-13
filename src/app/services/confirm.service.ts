import { Injectable } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";

import { ConfirmDialogComponent } from "../../app/shared/components/confirm-dialog/confirm-dialog.component";


@Injectable({
  providedIn: 'root'
})
export class ConfirmService {

  constructor(private dialog: MatDialog) { }

  openConfirmDialog(msg){
    return this.dialog.open(ConfirmDialogComponent,{
       width: '390px',
       panelClass: 'confirm-dialog-container',
       disableClose: true,
       position: { top: "10px" },
       data :{
         message : msg
       }
     });
   }
}
