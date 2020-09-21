import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  isLoggedIn = false;
  
  constructor(public firebaseAuth : AngularFireAuth) { }
  

  // signin the page
  async signIn(emailId:string,Pswd:string){
    await this.firebaseAuth.signInWithEmailAndPassword(emailId,Pswd).then(res=>{
      this.isLoggedIn = true;
      localStorage.setItem('user',JSON.stringify(res.user))
    })
  }

  // signup the page
  async signUp(emailId:string,Pswd:string){
    await this.firebaseAuth.createUserWithEmailAndPassword(emailId,Pswd).then(res=>{
      this.isLoggedIn = true;
      localStorage.setItem('user',JSON.stringify(res.user))
    })
  }

  // logout the user page
  logOutUser(){
    this.firebaseAuth.signOut()
    localStorage.removeItem('user');
  }



}
