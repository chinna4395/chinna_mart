import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from "@angular/fire";
import { FirebaseService } from './services/firebase.service';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { LoginPageComponent } from "./login-page/login-page.component";
import { SignupPageComponent } from "./signup-page/signup-page.component";
import { UserManagementComponent } from "./user-management/user-management.component";
import { AngularFireAuthModule } from '@angular/fire/auth'

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {A11yModule} from '@angular/cdk/a11y';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MatPaginatorModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginPageComponent,
    SignupPageComponent,
    UserManagementComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp( {
      apiKey: "AIzaSyCyEeUP73o5E5MZiM69eagzdbuU0PpnzuE",
      authDomain: "chinnamart-489b2.firebaseapp.com",
      databaseURL: "https://chinnamart-489b2.firebaseio.com",
      projectId: "chinnamart-489b2",
      storageBucket: "chinnamart-489b2.appspot.com",
      messagingSenderId: "550198720413",
      appId: "1:550198720413:web:dd0e189c27e79f511ea174",
      measurementId: "G-6B4P31R78S"
    }),
    AngularFireAuthModule,
    MatInputModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatCardModule,
    // A11yModule,
    CommonModule,
    MatTableModule,
    MatPaginatorModule


  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent],
  // exports: [ MatFormFieldModule, MatInputModule ]
})
export class AppModule { }
