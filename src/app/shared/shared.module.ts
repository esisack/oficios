import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from "../material/material.module";

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { AvatarPhotoComponent } from './components/avatar-photo/avatar-photo.component';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';



@NgModule({
  declarations: [
    HeaderComponent, 
    FooterComponent, 
    SidebarComponent, 
    AvatarPhotoComponent, 
    ConfirmDialogComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  exports: [
    HeaderComponent, 
    FooterComponent, 
    SidebarComponent,
    AvatarPhotoComponent,
    ConfirmDialogComponent
  ]
})
export class SharedModule { }
