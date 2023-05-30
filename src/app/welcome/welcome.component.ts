import { Component } from '@angular/core';
import { PopupaddComponent } from '../admin/popupadd/popupadd.component';
import {MatDialog} from '@angular/material/dialog'
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {

  constructor(private h:MatDialog){}

  openpopup(){
    this.h.open(PopupaddComponent,{
      width:'90px',
      height:'90px',      
    });
  }

}
