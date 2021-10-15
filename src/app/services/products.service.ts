import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore'
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/compat/database';
import { Product } from '../interfaces/product';
import { BehaviorSubject } from 'rxjs';
import { Cart } from '../interfaces/cart';



@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  
  products: Product[] = []
  view = []
  add: number = -1
  
  productDetails: any = {} 

  //cart-movement
  cart: Cart[] = []

  totFor : number = 0;

  public cartItemCount = new BehaviorSubject(0);

  name = "";
  price = 0;
  description= "";
  imgUrl = "";

  constructor(private fs: AngularFirestore, private storage: AngularFireStorage, private df: AngularFireDatabase) { }
  
  addNewProduct(name: string, price: number, description: string, image: File, numOfIterms: number){
    let ref = this.storage.ref('products/' + image.name)
    ref.put(image).then(() => {
      ref.getDownloadURL().subscribe(imgUrl => {
        this.fs.collection('products').add({
          name,
          price,
          description,
          imgUrl,
          numOfIterms,

        })
      })
    })
  }

  getAllProducts(){
    return this.fs.collection('products').snapshotChanges()
  }

  getProductDetails(){
    
    return this.productDetails
  }

  //name accessor
  getName(){
    return this.name
  }

  //price accessor
  getPrice(){
    return this.price
  }

  //description accessor
  getDescription(){
    return this.description
  }

  //image accessor 
  getImageUrl(){
    return this.imgUrl
  }

  showProduct(product: Product){
    
    let data = {
      id: product.id,
      name: product.name,
      price: product.price,
      description: product.description,
      numOfIterms: product.numOfIterms,
      imgUrl: product.imgUrl
    } 

    this.productDetails = data
    this.name = data.name
    this.description = data.description
    this.price = data.price
    this.imgUrl = data.imgUrl
    console.log(this.name)

   }


   //get cart
   getCart(){
    return this.cart;
  }

  //get data from cart
  getCheckout(){

  }

  getCartItemCount(){
    return this.cartItemCount;
  }

  addProduct(product: any, index:number){
    let added = false;
    this.add += index;
    product = this.productDetails
    for(let p of this.cart){
      if(p.id == product.id){
        p.numOfIterms += 1;
        added = true;

        break;
      }
    }
    if(!added){
      this.cart.push(product);
      
    }
    this.cartItemCount.next(this.cartItemCount.value + 1);
    console.log('add to cart', this.cart)
    

  }

  addCheckout(){
    
    return this.cart
  }

}
