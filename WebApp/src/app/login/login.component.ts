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
    console.log('Logging in');
    this.router.navigate(['/home']);
  }

  register() {

  }
  login() {
    if(this.email=="admin" && this.password=="admin"){
        this.snackBar.open('Login Successful','',{duration:1000})
        console.log('Logging in');
        this.router.navigate(['/home']);
    }else{
      this.snackBar.open('Login error','',{duration:1000})
    }
  }
}
