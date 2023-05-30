import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router';
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

  
  

}
