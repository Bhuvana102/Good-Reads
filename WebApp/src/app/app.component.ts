import { Route } from '@angular/compiler/src/core';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'goodReads';
  constructor(private router: Router) { 
    console.log('app entered');
  }

  ngOnInit(): void {
    // this.router.navigate(['login']);
  }
}