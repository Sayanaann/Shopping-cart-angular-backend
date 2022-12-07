import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userreg',
  templateUrl: './userreg.component.html',
  styleUrls: ['./userreg.component.css']
})
export class UserregComponent {
  name=""
  address=""
  mobno=""
  emailid=""
  username=""
  password=""
  confirmpassword=""
  
  constructor(private route:Router){}


  reg=()=>
  {
let data : any ={ "name":this.name,"address":this.address,"mobno":this.mobno,"emailid":this.emailid,
"username":this.username,
"password":this.password,
"confirmpassword":this.confirmpassword

}
  
  console.log(data)
  if (this.password=="12345"&& this.confirmpassword=="12345") {
    alert("Registered Successfully")
    this.route.navigate(['/employee login'])
   
   
 } else {
  alert("Password doesn't match")
  
 }

}

}
