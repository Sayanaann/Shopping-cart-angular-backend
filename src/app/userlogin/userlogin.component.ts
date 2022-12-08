import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent {
  emailid=""
  password=""
  
  
  
  constructor(private api:ApiService,private route:Router){}

  userlogin=()=>
  {
let data : any ={  "emailid": this.emailid,
"password":this.password}
  
  console.log(data)
     this.api.fetchproduct().subscribe(
      (response:any)=>{
        this.emailid=""
        this.password=""
        if(response.status="success"){
          this.route.navigate(['/viewcart'])
        }else{
          alert(response.message)
        }
      }

     )

}
}