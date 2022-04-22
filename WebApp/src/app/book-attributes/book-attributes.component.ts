import { Component, Injectable, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { GenreDetailsModel, IndividualRatings, TopBooksModel } from '../models/general-models';
import { ApiService } from '../services/api.service';
import { GlobalService } from '../services/global.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-book-attributes',
  templateUrl: './book-attributes.component.html',
  styleUrls: ['./book-attributes.component.scss']
})

@Injectable({
  providedIn: 'root'
})

export class BookAttributesComponent implements OnInit {
  bookId: any;
  selectedbook: any;
  selectedTopbook: any;
  topBooksData: TopBooksModel[]=[]
  // ratingData!: IndividualRatings;
  constructor(private api: ApiService, private route: ActivatedRoute, public global: GlobalService,
    private router: Router, private snack: MatSnackBar) {
    this.bookId = this.route.snapshot.params.id;
    this.api.getIndividualRating(this.bookId).subscribe((rateData: IndividualRatings) => {
      this.global.glbRating = rateData;
    })
  }

  ngOnInit(): void {
    this.api.getGenreDetails(String(localStorage.getItem('genreId'))).subscribe((bookData: GenreDetailsModel[]) => {
      this.global.preGenreBooks = bookData;
      this.selectedbook = this.global.preGenreBooks.filter(x => x.ID == this.bookId)[0];
      localStorage.setItem('averageRating', this.selectedbook.AvgRating);
      this.getTopBooks();
    })
  }

  getTopBooks(){
    this.api.getTopBooks(Number(localStorage.getItem('genreId'))).subscribe((topBooks: TopBooksModel[])=>{
      // console.log(topBooks);
      this.topBooksData = topBooks;
    })
  }
  AddToMyBooks(selectedbook: any) {
    let mybooks = JSON.parse(sessionStorage.getItem("mybooks"));
    if (mybooks) {
      if (mybooks.findIndex(x => x.ID === selectedbook.ID) < 0) {
        mybooks.push(selectedbook);

      }
      this.snack.open('Book Added Successfully', '', { duration: 2000 })
    } else {
      mybooks = [];
      mybooks.push(selectedbook);
      this.snack.open('Book Added Successfully', '', { duration: 2000 })
    }
    sessionStorage.setItem("mybooks", JSON.stringify(mybooks));
  }

  markStar(indrating: number, i: number) {
    if (indrating >= i + 1) {
      return 'star';
    } else {
      return 'star_border';
    }
  }

  showDescription(name: string) {
    this.selectedTopbook = this.global.preGenreBooks.filter(x => x.Name == name)[0];
  }
  goToBookDetails(bookID: number) {
    this.router.navigateByUrl('/book-details/' + String(bookID))
    // location.reload();
  }

  getAverageRating() {
    return Number(localStorage.getItem('averageRating'));
  }
}
