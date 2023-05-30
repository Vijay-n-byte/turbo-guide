import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ilogin } from '../interfaces/ilogin';
import { Products } from '../interfaces/products';
import { Customer } from '../interfaces/customer';

@Injectable({
  providedIn: 'root'
})
export class SampleserviceService {
  data:Ilogin;

  constructor(private http:HttpClient) { }

  private root:string ="http://localhost:8080/login/";
  private root1:string ="http://localhost:8080/products";
  private root2:string ="http://localhost:8080/products/dummy";
  private root3:string ="http://localhost:8080/customers";
  

  
  getlogincredentials(username:string):Observable<Ilogin | null> | null {
    let y=this.root+username;
    let z=this.http.get<Ilogin>(y);
    z.subscribe(m=>this.data=m);
    console.log(this.data);
    return z;
  }

  deleteproducts(n:number):Observable<Products|null>|null{
    let y=`${this.root1}/${n}`;
    return this.http.delete<Products>(y);
  }

  getproductsdetails():Observable<Products|null>|null{
    return this.http.get<Products>(this.root1);
  } 

  uploadimg(h:number,j:FormData){
    let y=`${this.root2}/${h}`;
    return this.http.post(y,j);
  }

  signin(d:Customer):Observable<Customer|null>|null{
    return this.http.post<Customer>(this.root3,d);
    
  }


  // uploadproducts(y:File):Observable<any|null>|null{
  //   const f:FormData=new FormData();
  //   f.append('file',y);
  //   console.log(y);
  //   const request=new HttpRequest('POST',this.root2,f,{
  //     reportProgress:true,
  //     responseType:'json'
  //   });
  //   return this.http.request(request);
  //  // return this.http.post<any>(this.root2,y);
  // }

  // uploadproducts(y:FormData):Observable<any|null>|null{
  //   return this.http.post(this.root2,y);
    
   
  // }

  uploadproducts(y:Products):Observable<any|null>|null{
    console.log(y);
   return this.http.post(this.root1,JSON.stringify(y));
  }
  // getlogincredentials(username:string):Promise<Ilogin | null> | null {
  //   return new Promise((resolve,reject)=>{
  //     setTimeout(() => {
  //       username===this.http.get<Ilogin>(this.root+username).toPromise
        
  //     }, 5000);

  //   })
    
  // }
}

