import { Component, OnInit } from '@angular/core';
import { ReviewModal } from '../models/general-models';
import { ApiService } from '../services/api.service';
import { GlobalService } from '../services/global.service';

@Component({
  selector: 'app-book-reviews',
  templateUrl: './book-reviews.component.html',
  styleUrls: ['./book-reviews.component.scss']
})
export class BookReviewsComponent implements OnInit {

  bookReviews: ReviewModal[]=[]
  constructor(private api: ApiService, private global: GlobalService) { 
    this.api.getReviews(10,this.global.bookIDglb).subscribe((reviewData: ReviewModal[])=>{
      console.log(reviewData);
      this.bookReviews = reviewData;
    })
  }

  ngOnInit(): void {
  }

  markIndStar(i: number,rating: number) {
    if (Number(rating) >= i + 1) {
      return 'star';
    } else {
      return 'star_border';
    }
  }

}
