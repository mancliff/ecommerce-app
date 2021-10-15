import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private fs : AngularFirestore) { }

  CreateNewUser(id: any, firstName :any, lastName: any, email: any, password: any){
    this.fs.doc('user/' + id).set({
      firstName,
      lastName,
      email,
      password
    }) 
  }
}
