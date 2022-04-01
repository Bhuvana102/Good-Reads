import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { GlobalService } from '../services/global.service';
import { ActivatedRoute, Router } from '@angular/router';
import { GenreDetailsModel } from '../models/general-models';
@Component({
  selector: 'app-genre-books',
  templateUrl: './genre-books.component.html',
  styleUrls: ['./genre-books.component.scss']
})

export class GenreBooksComponent implements OnInit {
  books: GenreDetailsModel[] = [];
  constructor(private api: ApiService, private route: ActivatedRoute, public global: GlobalService,
              private router:Router) { 

  }
  description = "";
  selectedbook: any;
  bookId = this.route.snapshot.params.id;

  ngOnInit(): void {
  }

  showDescription(name: string) {
    this.selectedbook = this.global.preGenreBooks.filter(x => x.Name == name)[0];
  }
  goToBookDetails(bookID: number){
    this.router.navigate(['/book-details/'+ String(bookID)])
  }
}




