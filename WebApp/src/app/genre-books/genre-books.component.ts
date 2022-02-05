import { Component, OnInit } from '@angular/core';
import { AppService } from '../services/api.service';
import { GlobalService } from '../services/global.service';

@Component({
  selector: 'app-genre-books',
  templateUrl: './genre-books.component.html',
  styleUrls: ['./genre-books.component.scss']
})
export class GenreBooksComponent implements OnInit {

  constructor() { }
  //books = ["The Shining", "White is Witching", "The only good Indians", "The Outsider", "Reprieve", "Interviewing the Vampire", "Book7", "book8", "book9", "book10"];
  books = [
    { name: "book1", img: "book1.jpg", desc: "hii" },
    { name: "book2", img: "book2.jpg", desc: "hi2" },
    { name: "book3", img: "book3.jpg", desc: "hi3" },
    { name: "book4", img: "book4.jpg", desc: "hi4" },
    { name: "book5", img: "book5.jpg", desc: "hi5" },
    { name: "book6", img: "book6.jpg", desc: "hi6" },
    { name: "book7", img: "book7.jpg", desc: "hi7" },
    { name: "book8", img: "book8.jpg", desc: "hi8" },
    { name: "book9", img: "book9.jpg", desc: "hi9" },
    { name: "book10", img: "book10.jpg", desc: "hi10" },
    { name: "book11", img: "book11.jpg", desc: "hi11" },
    { name: "book12", img: "book12.jpg", desc: "hi12" }
  ]
  description = "";
  selectedbook = "";

  ngOnInit(): void {
  }
  showDescription(name: string) {
    this.selectedbook = name;
    this.description = this.books.filter(x => x.name == name)[0].desc;

  }
}




