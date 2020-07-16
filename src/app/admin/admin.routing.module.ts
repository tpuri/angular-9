import { RouterModule, Routes } from '@angular/router';

import { DasboardComponent } from './dasboard/dasboard.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';

const routes: Routes = [{
  path: 'login',
  component: LoginComponent
},{
  path: 'dashboard',
  component: DasboardComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
