import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from "./material/material.module";
import { GoogleMapsModule } from '@angular/google-maps'

import { AuthModule } from "./auth/auth.module";
import { LayoutsModule } from "./layouts/layouts.module";
import { ModulesModule } from "./modules/modules.module";
import { SharedModule } from "./shared/shared.module";
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    AuthModule,
    LayoutsModule,
    ModulesModule,
    SharedModule,
    GoogleMapsModule
  ],
  exports: [
    AuthModule,
    LayoutsModule,
    MaterialModule,
    ModulesModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
