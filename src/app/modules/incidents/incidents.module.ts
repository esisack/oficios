import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InboxComponent } from './inbox/inbox.component';
import { ListComponent } from './inbox/list/list.component';
import { SearchComponent } from './inbox/search/search.component';
import { DetailComponent } from "./detail/detail.component";
import { InfoComponent } from './detail/info/info.component';
import { ImagesComponent } from './detail/images/images.component';
import { MapComponent } from './detail/map/map.component';

import { MaterialModule } from 'src/app/material/material.module';
import { RouterModule } from '@angular/router';
import { GoogleMapsModule } from "@angular/google-maps";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ControlComponent } from './control/control.component';
import { AgmCoreModule } from '@agm/core';
import { ControlGridComponent } from './control-grid/control-grid.component';
import { DialogInfoComponent } from './detail/dialog-info/dialog-info.component';
import { ViewInfoComponent } from './detail/info/view-info/view-info.component';

import { ConfirmInfoComponent } from './detail/info/confirm-info/confirm-info.component';
import { DeriveComponent } from './detail/info/derive/derive.component';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { LogsComponent } from './detail/logs/logs.component';

@NgModule({
  declarations: [
    InboxComponent,
    ListComponent,
    SearchComponent,
    DetailComponent,
    InfoComponent,
    ImagesComponent,
    MapComponent,
    ControlComponent,
    ControlGridComponent,
    DialogInfoComponent,
    ViewInfoComponent,
    ConfirmInfoComponent,
    DeriveComponent,
    LogsComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    GoogleMapsModule,
    FormsModule,
    ReactiveFormsModule,
    NgxGalleryModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA0VCSHoqA8zAK-cCuj7DJt2uIxp6X2jr8'
    }),
  ]
})
export class IncidentsModule { }
