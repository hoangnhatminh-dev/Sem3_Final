import { ProductsComponent } from './products.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', component: ProductsComponent},
  // Products Pages
  {path: 'product-detail', loadChildren: () => import('../products/product-detail/product-detail.module').then(m => m.ProductDetailModule)},
  {path: 'lockets', loadChildren: () => import('./lockets/lockets.module').then(m => m.LocketsModule)},
  {path: 'bracelets', loadChildren: () => import('./bracelets/bracelets.module').then(m => m.BraceletsModule)},
  {path: 'earrings', loadChildren: () => import('./earrings/earrings.module').then(m => m.EarringsModule)},
  {path: 'necklaces', loadChildren: () => import('./necklaces/necklaces.module').then(m => m.NecklacesModule)},
  {path: 'rings', loadChildren: () => import('./rings/rings.module').then(m => m.RingsModule)},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
