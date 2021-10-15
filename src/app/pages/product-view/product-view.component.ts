import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { ProductsService } from 'src/app/services/products.service';


@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {
  
  products: Product[] = []
  
  product = {} 
  index:number = 0
  

  //product data//
  name = "";
  price = 0;
  description = "";
  imageUrl = "";
  
  constructor(private ps: ProductsService) { }

  
  ngOnInit(): void {

    this.name = this.ps.getName()
    this.price = this.ps.getPrice()
    this.description = this.ps.getDescription()
    this.imageUrl = this.ps.getImageUrl()
    
    console.log(this.name)
    
  }

  callAddtoCart(product: any){
    product = this.ps.productDetails
    this.ps.showProduct(product)
    this.ps.addProduct(product, this.index)

  }

}
