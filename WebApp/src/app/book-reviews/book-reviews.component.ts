import { Component, Injectable, OnInit } from '@angular/core';
import { ReviewModal } from '../models/general-models';
import { ApiService } from '../services/api.service';
import { GlobalService } from '../services/global.service';

@Component({
  selector: 'app-book-reviews',
  templateUrl: './book-reviews.component.html',
  styleUrls: ['./book-reviews.component.scss']
})

@Injectable({
  providedIn: 'root'
})

export class BookReviewsComponent implements OnInit {

  constructor(private api: ApiService, public global: GlobalService) { 
    this.api.getReviews(10,this.global.bookIDglb).subscribe((reviewData: ReviewModal[])=>{
      console.log(reviewData);
      this.global.glbReviews = reviewData;
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
