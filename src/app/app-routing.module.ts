import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { DefaultComponent } from './layouts/default/default.component';

import { InboxComponent } from "src/app/modules/incidents/inbox/inbox.component";
import { DetailComponent } from "src/app/modules/incidents/detail/detail.component";
import { HomeComponent } from 'src/app/modules/home/home.component';
import { ControlComponent } from './modules/incidents/control/control.component';
import { ControlGridComponent } from './modules/incidents/control-grid/control-grid.component';

const routes: Routes = [
  {
  path: '',
  component: DefaultComponent,
  children: [{
    path: '',
    component: HomeComponent,
  },{
    path: 'oficios',
    component: InboxComponent,
  },{
    path: 'detail/:id',
    component: DetailComponent,
  },{
    path: 'control',
    component: ControlComponent,
  },{
    path: 'control-grid',
    component: ControlGridComponent,
  }
]
}, {
    path: 'login',
    component: LoginComponent
  }, {
    path: 'register',
    component: RegisterComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
