import { Component,OnInit } from '@angular/core';
import {FormGroup,FormControl,FormArray,Validators} from '@angular/forms'; 

@Component({
  selector: 'app-adminsignin',
  templateUrl: './adminsignin.component.html',
  styleUrls: ['./adminsignin.component.css']
})
export class AdminsigninComponent implements OnInit{

  userform!: FormGroup;

  ngOnInit(): void {

    this.userform=new FormGroup({

      username:new FormControl('',
      [Validators.required,Validators.minLength(5),Validators.maxLength(10)]),
      password:new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(10)])
    });
  }

  submited(y:FormGroup)
  {
    console.log(y.get('username')?.errors?.['minLength']);

  }





}
