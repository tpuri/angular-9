import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedComponent } from './shared.component';

@NgModule({
  declarations: [SharedComponent],
  imports: [
    CommonModule
  ],
  exports: [SharedComponent]
})
export class SharedModule { }
