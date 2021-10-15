import { ElementRef, ViewChild, Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';
import { finalize } from 'rxjs/operators';
import {Observable} from 'rxjs';  
import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/app/interfaces/product';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  file: File = null as any; // Variable to store file
  @ViewChild('image') image: ElementRef | any
  constructor(private ps: ProductsService, private storage: AngularFireStorage) { }
  
  

  ngOnInit(): void {
  }

  saveProduct(form: NgForm){
    let name = (<Product>form.value).name,
    description = (<Product>form.value).description,
    price = (<Product>form.value).price,
    image = (<HTMLInputElement>this.image.nativeElement as any).files[0],
    numberOfIterms = (<Product>form.value).numOfIterms
    this.ps.addNewProduct(name, price, description, image, numberOfIterms)

  }

}
