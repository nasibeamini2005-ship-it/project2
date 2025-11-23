import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  imports: [FormsModule],
  templateUrl: './login-page.html',
  styleUrl: './login-page.scss',
})
export class LoginPage {
  username:string='';
  password:string='';
  remember:boolean=false;
  massage:string='';
  router=inject(Router);
login(){
if(this.username=='amini'&& this.password=='N100'){
  this.router.navigateByUrl('/private/dashboard')
}
else{
this.massage='نام کاربری یا کلمه عبور صحیح نیست!';
}
}
}
