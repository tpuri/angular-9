import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';

const routes: Routes = [{
  path: 'admin',
  loadChildren: () => import('./admin/admin.module').then((module) => module.AdminModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
