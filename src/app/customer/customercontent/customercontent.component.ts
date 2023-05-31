import { Component ,OnInit} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Addtocart } from 'src/app/interfaces/addtocart';
import { SampleserviceService } from 'src/app/services/sampleservice.service';

@Component({
  selector: 'app-customercontent',
  templateUrl: './customercontent.component.html',
  styleUrls: ['./customercontent.component.css']
})
export class CustomercontentComponent implements OnInit{
  j:Array<number>=[10,20,30,11,12,13,14,15,16,17];

  constructor(private g:SampleserviceService,private k1:Router){}

  public k:any;
  ngOnInit(): void {

    this.g.getproductsdetails().subscribe(
      m =>this.k=m
     );
    
  }

  // addtocart(r,h:number){
  //   console.log(r.value);
  //   console.log(h as number);
  //   this.g.addtocart(h,r.value.quantity);
  // }
  
  addtocart(r,h:any){
    let rr:number=r.value.quantity;
    let rrr:number=h as number;
    console.log(rr);
    console.log(rrr);
    this.g.addtocart(rrr,rr).subscribe();
    // let jj:Addtocart;
    // let u:number=h as number;
    // jj.productnumber=u;
    // jj.quantity=r.value.quantity;
    // console.log(u);
    // console.log(jj.productnumber);
    // console.log(jj.quantity);
    // this.g.addtocart(jj).subscribe();
  }
  

}
