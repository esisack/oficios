import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncidentsModule } from "./incidents/incidents.module";
import { HomeModule } from './home/home.module'
import { MaterialModule } from '../material/material.module';
import { GoogleMapsModule } from '@angular/google-maps'
import { AgmCoreModule } from '@agm/core';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialModule,
    IncidentsModule,
    HomeModule,
    GoogleMapsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA0VCSHoqA8zAK-cCuj7DJt2uIxp6X2jr8'
    })
  ]
})
export class ModulesModule { }
