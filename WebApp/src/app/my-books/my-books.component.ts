import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-books',
  templateUrl: './my-books.component.html',
  styleUrls: ['./my-books.component.scss']
})
export class MyBooksComponent implements OnInit {

  constructor() { }
  mybooks: any;

  ngOnInit(): void {
    let a = sessionStorage.getItem("mybooks")
    this.mybooks = JSON.parse(a)
  }

}
