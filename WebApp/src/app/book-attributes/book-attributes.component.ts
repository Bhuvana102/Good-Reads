import { Component, Injectable, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GenreDetailsModel, IndividualRatings } from '../models/general-models';
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
  // ratingData!: IndividualRatings;
  constructor(private api: ApiService, private route: ActivatedRoute, public global: GlobalService,
    private router: Router) {
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
    })
  }
  AddToMyBooks(selectedbook: any) {
    let mybooks = JSON.parse(sessionStorage.getItem("mybooks"));
    if (mybooks) {
      if (mybooks.findIndex(x => x.ID === selectedbook.ID) < 0) {
        mybooks.push(selectedbook);
      }
    } else {
      mybooks = [];
      mybooks.push(selectedbook);
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
  getAverageRating() {
    return Number(localStorage.getItem('averageRating'));
  }
}
