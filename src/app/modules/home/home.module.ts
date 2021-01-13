import { NgModule } from '@angular/core';
import { MaterialModule } from '../../../app/material/material.module';
import { GoogleMapsModule } from '@angular/google-maps'
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { InfoComponent } from './info/info.component';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [
    HomeComponent,
    InfoComponent,
    MapComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    GoogleMapsModule,
    MatListModule

  ]
})
export class HomeModule { }
