import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cart } from 'src/app/interfaces/cart';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart: Cart[] = []
  cartItemCount: BehaviorSubject<number> | any;
  constructor(private ps: ProductsService) { }

  ngOnInit(): void {

    this.cart = this.ps.getCart()
    this.cartItemCount = this.ps.getCartItemCount();
  }

  getTotal(){

    return this.cart.reduce((i, j) => i + j.price * j.numOfIterms, 0);
  }

  checkout(){

    this.ps.addCheckout()
  }

}
