import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer/customer.component';
import { CustomercontentComponent } from './customercontent/customercontent.component';
import { CartComponent } from './cart/cart.component';



@NgModule({
  declarations: [
    CustomerComponent,
    CustomercontentComponent,
    CartComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CustomerModule { }
