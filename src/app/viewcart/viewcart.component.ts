import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewcart',
  templateUrl: './viewcart.component.html',
  styleUrls: ['./viewcart.component.css']
})
export class ViewcartComponent {
  constructor(private api :ApiService){
    api.fetchproduct().subscribe(
  
      (response)=>{
      this.product=response;
      }
    )
  }
  
  
  
  product:any =
  []

}
