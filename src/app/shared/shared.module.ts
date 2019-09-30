import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SelectComponent } from './components/select/select.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [SelectComponent],
  exports: [SelectComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedRoutingModule
  ]
})
export class SharedModule { }
