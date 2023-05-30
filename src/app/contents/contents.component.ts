import { Component, OnInit } from '@angular/core';
import { SampleserviceService } from '../services/sampleservice.service';
import { AppRoutingModule } from '../app-routing.module';
import { Router } from '@angular/router';
import { CustomerloginComponent } from '../customerlogin/customerlogin.component';

@Component({
  selector: 'app-contents',
  templateUrl: './contents.component.html',
  styleUrls: ['./contents.component.css']
})
export class ContentsComponent implements OnInit {

  constructor(private g:SampleserviceService,private k1:Router){}

  public k:any;
  ngOnInit(): void {

    this.g.getproductsdetails().subscribe(
      m =>this.k=m
     );
    
  }

  loginfirst(){
    this.k1.navigate(['adminlogin']);

  }

  

}
