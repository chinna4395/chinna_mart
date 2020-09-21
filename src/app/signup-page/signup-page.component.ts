import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent implements OnInit {
  profileForm : FormGroup;
  isSignIn:boolean =false;
  errormessage:string;

  constructor(
    private firebaseService :FirebaseService,
    private router : Router,
    ) { }

  ngOnInit() {
    this.profileForm = new FormGroup({
      'name':new FormControl('',Validators.required),
      'email':new FormControl('',Validators.required),
      'pswd':new FormControl('',Validators.required),
    })
    if(localStorage.getItem('user')!== null){
      this.isSignIn = true;
    }else{
      this.isSignIn = false;
    }
  }

 async loginSubmit(form){
   if(form){
     const email = this.profileForm.get('email').value;
     const password = this.profileForm.get('pswd').value;
  await this.firebaseService.signUp(email,password).then((res)=>{
    console.log(res);
    
  }, reason => {
    console.error(reason); 
    this.errormessage = reason.message;
  })
  if(this.firebaseService.isLoggedIn){
    this.isSignIn = true;
    this.router.navigate(['/dashboard']);
  }
  }
  }
}
