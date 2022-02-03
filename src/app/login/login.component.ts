import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private loginid: string = '';
  private password: string = '';
  constructor(private router: Router) { 
  }

  ngOnInit(): void {
  }

  doLogin(){
    console.log('Logging in');
    this.router.navigate(['/home']);
  }

}
