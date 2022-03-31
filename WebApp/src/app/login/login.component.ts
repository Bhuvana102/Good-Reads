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

  constructor(private router: Router, private snackBar:MatSnackBar) { 
  }

  ngOnInit(): void {
  }

  doLogin(){
    this.router.navigate(['/home']);
  }

  register() {

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
