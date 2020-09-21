import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  message:string;

  constructor(
    private firebaseService :FirebaseService,
    public firebaseAuth : AngularFireAuth,
    private router:Router,
  ) { }

  ngOnInit() {
  
  }

  logOutProcess(e){
    if(e){
      this.firebaseAuth.signOut()
      localStorage.removeItem('user');
      this.router.navigate(['/login'])
    }
  }
}
