import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private loginid: string = '';
  // private password: string = '';

  // START OF DUMMY
  
  title = 'demoApp';
  email:string='';
  password:string='';
  remail:string='';
  rpassword:string='';
  rcpassword:string='';
  rFirstName: string = '';
  rLastName:string='';
  emailRegex = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  passwordRegex = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
  constructor(private router: Router, private snackBar:MatSnackBar) { 
  }

  ngOnInit(): void {
  }

  onEmailFocusOut(emailId){
    if(emailId===''){
      this.snackBar.open("Email Cannot be Empty",'',{duration:1000});
    }
    else if(!this.emailRegex.test(emailId)){
      this.snackBar.open("Enter Valid Email",'',{duration:1000})
    }
    else{
      return true
    }
  }
  onPasswordFocusOut(pswd){
    if(pswd===''){
      this.snackBar.open("Password Cannot be Blank",'',{duration:1000});
    }
    else if(!this.passwordRegex.test(pswd)){
      this.snackBar.open("Enter Valid Password",'',{duration:3000});
    }
    else{
      return true
    }
  }
  onConfPasswordFocusOut(){
    if(this.rcpassword===''){
      this.snackBar.open("Confirm Password Cannot be Empty",'',{duration:1000});
    }
    else if(!this.passwordRegex.test(this.rcpassword)){
      this.snackBar.open("Enter Valid Confirm Password",'',{duration:1000})
    }
    else{
      return true
    }
  }

  doLogin(){
    this.router.navigate(['/home']);
  }

  register() {
    if(!this.onEmailFocusOut(this.remail)) return
    else if(!this.onPasswordFocusOut(this.rpassword)) return
    else if(!this.onConfPasswordFocusOut()) return
    else {
      console.log(btoa(this.rpassword));
    }
  }
  login() {
    if(this.email=="admin" && this.password=="admin"){
        this.snackBar.open('Login Successful','',{duration:2000})
        this.router.navigate(['/home']);
    }else{
      if(this.email==='' && this.password ===''){
        this.snackBar.open('Please enter Credentials to continue','',{duration:2000})
      }
      else if(this.email===''){
        this.snackBar.open('Please enter Login Id','',{duration:2000})
      }
      else if(this.password===''){
        this.snackBar.open('Please enter a password','',{duration:2000})
      }
      else{
        this.snackBar.open('Invalid Login Id or Password','',{duration:2000})
      }
    }
  }
}
