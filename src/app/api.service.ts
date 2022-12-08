import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  userlogin: any;
  reg: any;

  constructor(private http :HttpClient) { }
  fetchproduct=()=>
  {

    return this.http.get("http://localhost:8080/viewproduct")
  }
  addproduct=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8080/addproduct",dataToSend)
  }
  searchproduct=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8080/searchproduct",dataToSend)
  }
  fetchuser=()=>
  {

    return this.http.get("http://localhost:8080/viewuser")
  }
  adduser=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8080/adduser",dataToSend)
  }
searchuser=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8080/searchuser",dataToSend)
  }
}

