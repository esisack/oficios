import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InboxComponent } from './inbox/inbox.component';
import { ListComponent } from './inbox/list/list.component';
import { SearchComponent } from './inbox/search/search.component';
import { DetailComponent } from "./detail/detail.component";
import { InfoComponent } from './detail/info/info.component';
import { ImagesComponent } from './detail/images/images.component';
import { MapComponent } from './detail/map/map.component';
import { ProccessComponent } from './detail/proccess/proccess.component';
import { MaterialModule } from 'src/app/material/material.module';
import { RouterModule } from '@angular/router';
import { GoogleMapsModule } from "@angular/google-maps";
import { Detail2Component } from './detail2/detail2.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
@NgModule({
  declarations: [
    InboxComponent, 
    ListComponent, 
    SearchComponent,
    DetailComponent,
    InfoComponent,
    ImagesComponent,
    MapComponent,
    ProccessComponent,
    Detail2Component
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    GoogleMapsModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class IncidentsModule { }
