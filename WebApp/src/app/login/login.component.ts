import { TOUCH_BUFFER_MS } from '@angular/cdk/a11y/input-modality/input-modality-detector';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginModal } from '../models/general-models';
import { ApiService } from '../services/api.service';

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
  rUserName: string ='';
  emailRegex = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  passwordRegex = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
  constructor(private router: Router, private snackBar:MatSnackBar,
              private api: ApiService) { 
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
    else if(this.rpassword !== this.rcpassword){
      this.snackBar.open("Password Doesnot Match",'',{duration:1000})
    }
    else{
      return true;
    }
  }

  // doLogin(){
  //   this.router.navigate(['/home']);
  // }

  register() {
    if(!this.onEmailFocusOut(this.remail)) return
    else if(!this.onPasswordFocusOut(this.rpassword)) return
    else if(!this.onConfPasswordFocusOut()) return
    else {
      console.log(this.rpassword);
      console.log(this.rcpassword);
      this.rpassword = btoa(this.rpassword);
      this.rcpassword = btoa(this.rcpassword);
      console.log(this.rpassword);
      console.log(this.rcpassword);
      this.api.signUpUser(this.buildPostData()).subscribe((data)=>{
        console.log(data);
        this.snackBar.open("User Registered Successfully! Please Login",'',{duration:2000})
        location.reload();
      })
    }
  }

  buildPostData(){
    const userData = {
        username : this.rUserName,
        FirstName : this.rFirstName,
        lastname : this.rLastName,
        password : this.rpassword,
        email : this.remail
    }
    return userData;
  }
  login() {
    const loginData = {
      email: this.email,
      password: btoa(this.password)
    }
    this.api.loginAuth(loginData).subscribe((data: LoginModal)=>{
      console.log(data);
      if(data.ID === 0) {
        this.snackBar.open("Invalid User! Register for first users",'',{duration:2000})
        return
      }
      else if(!data.status){
        this.snackBar.open("Invalid Password!",'',{duration:2000})
        return
      }
      else{
        localStorage.setItem('username',data.username);
        localStorage.setItem('userId',String(data.ID));
        this.router.navigate(['/home']);
      }
    },(error)=>{
      console.error('error caught in component' + JSON.parse(error));
    })
  }
}
