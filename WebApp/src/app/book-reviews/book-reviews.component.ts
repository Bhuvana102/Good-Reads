import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-reviews',
  templateUrl: './book-reviews.component.html',
  styleUrls: ['./book-reviews.component.scss']
})
export class BookReviewsComponent implements OnInit {

  bookReviews=[
    {Name: "Manish" ,rating:"4",review:"adfadf"},
    {Name: "Srikar", rating:"2",review:"adfadasddfasfdf"}]
  constructor() { }

  ngOnInit(): void {
  }

  markIndStar(i: number,rating: string) {
    if (Number(rating) >= i + 1) {
      return 'star';
    } else {
      return 'star_border';
    }
  }

}
