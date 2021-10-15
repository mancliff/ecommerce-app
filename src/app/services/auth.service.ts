import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { User } from 'src/app/interfaces/user';


import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: Observable<firebase.User> | any
  userId: string = ''

  constructor(private afa: AngularFireAuth) {
    this.user = this.afa.user
    
   }


  signup(email: any, password: any){
    
    return this.afa.createUserWithEmailAndPassword(email,password)
  }

  login(email: any, password: any){

    return this.afa.signInWithEmailAndPassword(email, password)
  }

  logout(){
    return this.afa.signOut()
  }
}

