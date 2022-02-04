import { Component, OnInit } from '@angular/core';
import { empty } from 'rxjs';

@Component({
  selector: 'app-horror',
  templateUrl: './horror.component.html',
  styleUrls: ['./horror.component.scss']
})
export class HorrorComponent implements OnInit {

  constructor() { }
  //books = ["The Shining", "White is Witching", "The only good Indians", "The Outsider", "Reprieve", "Interviewing the Vampire", "Book7", "book8", "book9", "book10"];
  books = [
    { name: "book1", img: "book1.jpg", desc: "hii" },
    { name: "book2", img: "book2.jpg", desc: "hi2" },
    { name: "book3", img: "book3.jpg", desc: "hi3" },
    { name: "book4", img: "book4.jpg", desc: "hi4" },
    { name: "book5", img: "book5.jpg", desc: "hi5" }
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
