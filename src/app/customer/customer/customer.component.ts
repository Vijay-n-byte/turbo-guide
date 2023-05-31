import { Component,OnInit } from '@angular/core';
import { Customerdetails } from 'src/app/interfaces/customerdetails';
import { SampleserviceService } from 'src/app/services/sampleservice.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit{

  h:Customerdetails;
  

  constructor(private nn:SampleserviceService){}
  ngOnInit(): void {
    console.log(this.nn.get());
    this.nn.getcustomerdetails().subscribe(m=>{
      if(m!=null){
          this.h=m;
          this.nn.set1(m.customerid);
       }
      });
   
        
  }
}
