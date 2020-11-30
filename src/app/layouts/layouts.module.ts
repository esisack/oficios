import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from "src/app/material/material.module";

import { FlexLayoutModule } from "@angular/flex-layout";
import { SharedModule } from '../shared/shared.module';

import { DefaultComponent } from './default/default.component';



@NgModule({
  declarations: [
    DefaultComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    FlexLayoutModule,
    RouterModule,
    SharedModule

  ]
})
export class LayoutsModule { }
