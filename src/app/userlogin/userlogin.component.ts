import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent {
  emailid=""
  password=""
  
  constructor(private route:Router){}

  userlogin=()=>
  {
let data : any ={  "emailid": this.emailid,
"password":this.password}
  
  console.log(data)
  }

}
