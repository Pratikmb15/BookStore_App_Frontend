import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../../Services/User/user.service';

@Component({
  selector: 'app-auth-layout',
  standalone: false,
  templateUrl: './auth-layout.component.html',
  styleUrl: './auth-layout.component.scss'
})
export class AuthLayoutComponent implements OnInit{
  constructor(private formbuild: FormBuilder, private user: UserService) { }
  signupForm!:FormGroup;
  loginForm!:FormGroup;


  hidePassword = true;
  login : boolean=true;
  signUp : boolean=true;

  ngOnInit(): void {
      this.signUp=true;
      this.login=false;
      this.loginForm = this.formbuild.group({
        email: [''],
        password: ['']
      })
      this.signupForm = this.formbuild.group({
        fullName: [''],
        email: [''],
        password: [''],
        mobile_Num: [''] 
      });
  }
 openLogin(){
  this.login=true;
  this.signUp=false;
 }
 openSignUp(){
   this.signUp=true;
  this.login=false;
 }
 Login() {

  let reqData = {
    email: this.loginForm.value.email,
    password: this.loginForm.value.password
  }
  return this.user.Login(reqData).subscribe((res: any) => {
    console.log(res)
    localStorage.setItem("token", res.data)
  })
}
Signup() {

  const reqData = {
    fullName: this.signupForm.value.fullName,
    email: this.signupForm.value.email,
    password: this.signupForm.value.password,
    mobile_Num: this.signupForm.value.mobile_Num 
  };

  this.user.Register(reqData).subscribe((res: any) => {
    console.log(res);
  });
}
}
