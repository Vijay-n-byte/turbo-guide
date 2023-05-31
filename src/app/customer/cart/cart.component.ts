import { Component,OnInit } from '@angular/core';
import { SampleserviceService } from 'src/app/services/sampleservice.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  
  r:any;
  constructor(private g:SampleserviceService){

  }

  ngOnInit(): void {
    this.g.getcart().subscribe(n=>this.r=n);
  }

}
