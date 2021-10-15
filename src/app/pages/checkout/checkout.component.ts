import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/interfaces/cart';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  cart: Cart[] = [] 

  constructor(private ps: ProductsService) { }

  ngOnInit(): void {

    this.cart = this.ps.getCart()
    
  }

  getTotal(){

    return this.cart.reduce((i, j) => i + j.price * j.numOfIterms, 0);
  }

}
