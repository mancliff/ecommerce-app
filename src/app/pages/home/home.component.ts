import { Component, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';
import {Product} from '../../interfaces/product';
import { ProductsService } from 'src/app/services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products: Product[] = []
  productsObservable: Subscription | any
  add: number = -1
  index: number = 0

  productView = {}

  constructor(private ps : ProductsService, private router: Router) { }

  ngOnInit(): void {

    this.productsObservable = this.ps.getAllProducts().subscribe(data => {
      this.products = data.map(element => {
        return {
          id: element.payload.doc.id, 
          ...element.payload.doc.data() as {}
        } as Product
      })
    })
  }

  ngOnDestroy(){
    this.productsObservable.unsubscribe()
  }

  getProductView(){
    return this.productView;
  }

  addToCart(product: Product,index:number){

    this.ps.addProduct(product,index);
    
  }
  addToView(product: Product){
    
    this.ps.showProduct(product)
  
  }

}
