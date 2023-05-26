import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminsigninComponent } from './adminsignin/adminsignin.component';
import { WelcomeComponent } from './welcome/welcome.component';


const routes: Routes = [
  {path:"",component:WelcomeComponent},
  {path:"adminlogin",component:AdminsigninComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
