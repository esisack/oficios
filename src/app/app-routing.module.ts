import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { DefaultComponent } from './layouts/default/default.component';

import { InboxComponent } from "src/app/modules/incidents/inbox/inbox.component";
import { DetailComponent } from "src/app/modules/incidents/detail/detail.component";

const routes: Routes = [
  {
  path: '',
  component: DefaultComponent,
  children: [{
    path: 'oficios',
    component: InboxComponent,
  },{
    path: 'detail/:id',
    component: DetailComponent,
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
