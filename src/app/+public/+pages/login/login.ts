import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  router=inject(Router);
  message:string='';
loginform:loginform={
  username:'',
  password:'',
  keepme:false,
};
check(){
  if(this.loginform.username=='admin' && this.loginform.password=='admin'){
   sessionStorage.setItem('token','ftydrfghjkky');
   if(this.loginform.keepme==true){
    localStorage.setItem('token','ftydrfghjkky');
   }
   this.router.navigateByUrl('private')
  }
  else{
this.message='نام کاربری یا کلمه عبور صحیح نیست'
}
}
}
interface loginform {
username:string;
password:string;
keepme:boolean;
}
