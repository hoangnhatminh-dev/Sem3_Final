import { RouterModule } from '@angular/router';
import { RingsComponent } from './rings/rings.component';
import { NecklacesComponent } from './necklaces/necklaces.component';
import { LocketsComponent } from './lockets/lockets.component';
import { EarringsComponent } from './earrings/earrings.component';
import { BraceletsComponent } from './bracelets/bracelets.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';


@NgModule({
  declarations: [
    ProductsComponent,
    BraceletsComponent,
    EarringsComponent,
    LocketsComponent,
    NecklacesComponent,
    RingsComponent,
    ProductDetailComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    RouterModule
  ]
})
export class ProductsModule { }
