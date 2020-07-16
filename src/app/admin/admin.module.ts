import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AdminRoutingModule } from './admin.routing.module';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { DasboardComponent } from './dasboard/dasboard.component';

@NgModule({
  declarations: [LoginComponent, DasboardComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AdminModule { }
