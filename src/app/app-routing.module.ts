import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // View Pages
  {path: 'home', loadChildren: () => import('./modules/view-pages/home/home.module').then(m => m.HomeModule)},
  {path: 'new-items', loadChildren: () => import('./modules/view-pages/new-items/new-items.module').then(m => m.NewItemsModule)},
  {path: 'bestsellers', loadChildren: () => import('./modules/view-pages/bestsellers/bestsellers.module').then(m => m.BestsellersModule)},
  {path: 'contact', loadChildren: () => import('./modules/view-pages/contact/contact.module').then(m => m.ContactModule)},
  {path: 'delivery', loadChildren: () => import('./modules/view-pages/delivery/delivery.module').then(m => m.DeliveryModule)},
  {path: 'faq', loadChildren: () => import('./modules/view-pages/faq/faq.module').then(m => m.FaqModule)},
  {path: 'explore', loadChildren: () => import('./modules/view-pages/explore/explore.module').then(m => m.ExploreModule)},
  {path: 'background', loadChildren: () => import('./modules/view-pages/background/background.module').then(m => m.BackgroundModule)},
  {path: 'stock', loadChildren: () => import('./modules/view-pages/stock/stock.module').then(m => m.StockModule)},
  {path: 'cart', loadChildren: () => import('./modules/view-pages/checkout/checkout.module').then(m => m.CheckoutModule)},
  {path: 'order-summary', loadChildren: () => import('./modules/view-pages/order-summary/order-summary.module').then(m => m.OrderSummaryModule)},

  // Products Pages
  {path: 'products', loadChildren: () => import('./modules/products/products.module').then(m => m.ProductsModule)},

  // {path: 'lockets', loadChildren: () => import('./modules/products/lockets/lockets.module').then(m => m.LocketsModule)},
  // {path: 'bracelets', loadChildren: () => import('./modules/products/bracelets/bracelets.module').then(m => m.BraceletsModule)},
  // {path: 'earrings', loadChildren: () => import('./modules/products/earrings/earrings.module').then(m => m.EarringsModule)},
  // {path: 'necklaces', loadChildren: () => import('./modules/products/necklaces/necklaces.module').then(m => m.NecklacesModule)},
  // {path: 'rings', loadChildren: () => import('./modules/products/rings/rings.module').then(m => m.RingsModule)},


  // Wildcard Routes
  // {path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
