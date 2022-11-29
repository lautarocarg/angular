import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component'
import { ProductComponent } from './components/product/product.component'
import { ContactComponent } from './components/contact/contact.component'
import { ProductsComponent } from './components/products/products.component'
import { DemoComponent } from './components/demo/demo.component'
import {NotFoundComponent} from './components/not-found/not-found.component'
import { ProductDetailComponent } from './components/product-detail/product-detail.component'
import { LayoutComponent } from './components/layout/layout.component'
const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        component: HomeComponent,
      },{
        path: 'product',
        component: ProductComponent
      },{
        path: 'products/:id',
        component: ProductDetailComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      },{
        path: 'products',
        component: ProductsComponent
      },
      {
        path: 'demo',
        component: DemoComponent
      },
      {
        path: '**',
        component: NotFoundComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
