import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BraceletsRoutingModule } from './bracelets-routing.module';
import { BraceletsComponent } from './bracelets.component';


@NgModule({
  // declarations: [BraceletsComponent],
  declarations: [],
  imports: [
    CommonModule,
    BraceletsRoutingModule
  ]
})
export class BraceletsModule { }
