import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewItemsRoutingModule } from './new-items-routing.module';
import { NewItemsComponent } from './new-items.component';


@NgModule({
  declarations: [NewItemsComponent],
  imports: [
    CommonModule,
    NewItemsRoutingModule
  ]
})
export class NewItemsModule { }
