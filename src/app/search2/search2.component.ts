import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search2',
  templateUrl: './search2.component.html',
  styleUrls: ['./search2.component.css']
})
export class Search2Component {
  constructor(private api:ApiService){}
  name=""
searchproduct:any=[]
  readvalue=()=>{
      let data={"name":this.name}
      console.log(data)
      this.api.searchproduct(data).subscribe(
        (response:any)=>{
        console.log(response)
        if (response.length==0) {
          alert("invalid employee code")
        } else {
          this.searchproduct=response
        }
        }
      )
        }

}
