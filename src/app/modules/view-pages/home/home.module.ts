import { FaqModule } from '../faq/faq.module';
import { DeliveryModule } from '../delivery/delivery.module';
import { ContactModule } from '../contact/contact.module';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    // ContactModule,
    // DeliveryModule,
    // FaqModule
  ]
})
export class HomeModule { }
