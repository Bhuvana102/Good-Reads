import { Component, OnInit } from '@angular/core';
import { AppService } from '../services/api.service';
import { GlobalService } from '../services/global.service';
import { ActivatedRoute } from '@angular/router';
import { GenreDetailsModel } from '../models/general-models';
@Component({
  selector: 'app-genre-books',
  templateUrl: './genre-books.component.html',
  styleUrls: ['./genre-books.component.scss']
})

export class GenreBooksComponent implements OnInit {
  books: GenreDetailsModel[] = [];
  constructor(private api: AppService, private route: ActivatedRoute, public global: GlobalService) { 

  }
  description = "";
  selectedbook: any;
  bookId = this.route.snapshot.params.id;

  ngOnInit(): void {
  }

  showDescription(name: string) {
    this.selectedbook = this.books.filter(x => x.Name == name)[0];
  }
}




