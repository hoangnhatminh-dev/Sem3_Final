import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidenavCartRoutingModule } from './sidenav-cart-routing.module';
import { SidenavCartComponent } from './sidenav-cart.component';


@NgModule({
  declarations: [SidenavCartComponent],
  imports: [
    CommonModule,
    SidenavCartRoutingModule
  ]
})
export class SidenavCartModule { }
