import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { UserregComponent } from './userreg/userreg.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';
import { UserloginComponent } from './userlogin/userlogin.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { Navbar1Component } from './navbar1/navbar1.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component'

const myRoute:Routes=[
  {
    path :"",
    component : AdminloginComponent
  },
  {
    path :"userreg",
    component : UserregComponent
  },
  {
    path :"userlogin",
    component : UserloginComponent
  },
  {
    path :"addproduct",
    component : AddproductComponent
  },
  {
    path :"viewproduct",
    component : ViewproductComponent
  }
  
]

@NgModule({
  declarations: [
    AppComponent,
    AdminloginComponent,
    UserregComponent,
    NavbarComponent,
    UserloginComponent,
    AddproductComponent,
    Navbar1Component,
    ViewproductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
