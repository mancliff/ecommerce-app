import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { ProductsComponent } from './admin/pages/products/products.component';
import { CartComponent } from './pages/cart/cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductViewComponent } from './pages/product-view/product-view.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';

const routes: Routes = [

  {
    path:'', redirectTo: '/home', pathMatch:'full'
  },
  {
    path : 'home', component: HomeComponent
  },
  
  {
    path : 'products', component: ProductsComponent
  },

  {
    path : 'product-view', component: ProductViewComponent
  },

  {
    path : 'cart', component: CartComponent
  },

  {
    path : 'checkout', component: CheckoutComponent
  },

  {
    path : 'signup', component: SignupComponent
  },

  {
    path : 'signin', component: SigninComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
