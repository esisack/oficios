import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncidentsModule } from "./incidents/incidents.module";
import { MaterialModule } from '../material/material.module';

import { GoogleMapsModule } from '@angular/google-maps'

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialModule,
    IncidentsModule,
    GoogleMapsModule
  ]
})
export class ModulesModule { }
