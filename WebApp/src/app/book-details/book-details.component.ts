import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { GenreDetailsModel, IndividualRatings, ReviewModal, ReviewPostData } from '../models/general-models';
import { ApiService } from '../services/api.service';
import { GlobalService } from '../services/global.service';
import { BookAttributesComponent } from '../book-attributes/book-attributes.component';
import { BookReviewsComponent } from '../book-reviews/book-reviews.component';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {
  collapsed: boolean = true;
  rating = 0;
  enteredReview = ''
  subs: Subscription | undefined
  maxRating = 5;
  isRated: boolean[] = [];
  bookId:string = ''
  constructor(private route: ActivatedRoute, private api: ApiService, private router: Router,
              private snack: MatSnackBar, private global: GlobalService, 
              private attr: BookAttributesComponent, private bkr: BookReviewsComponent) { 
    this.isRated = Array(this.maxRating).fill(false);
    this.bookId = this.global.bookIDglb =this.route.snapshot.params.id;
    console.log(this.bookId);
  }
  ngOnInit(): void {
  }
  markStar(i: number) {
    if (this.rating >= i + 1) {
      return 'star';
    } else {
      return 'star_border';
    }
  }

  takeInputRating(i: number) {
    this.rating = i + 1;
  }

  clearReviewForm(){
    this.rating = 0;
    this.enteredReview = ''
  }

  updateReviews(){
    this.api.getReviews(10,this.global.bookIDglb).subscribe((reviewData: ReviewModal[])=>{
      this.global.glbReviews = reviewData;
    })
  }
  updateAverageRating(){
    this.api.getIndividualRating(this.bookId).subscribe((rateData: IndividualRatings)=>{
      this.global.glbRating = rateData;
    });
    this.api.getGenreDetails(String(localStorage.getItem('genreId'))).subscribe((bookData: GenreDetailsModel[]) => {
      this.global.preGenreBooks = bookData;
      let selectedbook = this.global.preGenreBooks.filter(x => x.ID == Number(this.bookId))[0];
      localStorage.setItem('averageRating',String(selectedbook.AvgRating));
    })
  }
  submitReview(){
    let reviewData:ReviewPostData = {
        "Book_ID": String(this.bookId),
        "User_ID": String(Math.floor(Math.random()*101)),
        "Rating": Number(this.rating),
        "Review": this.enteredReview
    }
    this.subs = this.api.postReviewData(reviewData).subscribe((reviewReturnData)=>{
      if(reviewReturnData.status === 201){
        this.rating = 0;
        this.enteredReview = ''
        this.snack.open('Review Posted Successfully','',{duration:2000});
        this.updateAverageRating();
        this.updateReviews();
        // this.router.navigateByUrl('/book-details/'+ String(this.bookId),{skipLocationChange:false})
        this.subs?.unsubscribe();
      }
    }) 
  }
}
