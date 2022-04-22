import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  GenreDetailsModel,
  GenreModel,
  IndividualRatings,
  LoginModal,
  ReviewModal,
  ReviewPostData,
  TopBooksModel,
} from '../models/general-models';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getGenres(): Observable<GenreModel[]> {
    return this.http.get<GenreModel[]>('http://localhost:8080/api/getGenres');
  }
  getGenreDetails(genreid: string): Observable<GenreDetailsModel[]> {
    return this.http.get<GenreDetailsModel[]>(
      'http://localhost:8080/api/fetchGenreBooks?id=' + genreid
    );
  }

  getIndividualRating(bookid: string): Observable<IndividualRatings>{
    return this.http.get<IndividualRatings>('http://localhost:8080/api/fetchBookRatings?id='+bookid)
  }

  getReviews(rMaxCount:number,bookid: string): Observable<ReviewModal[]>{
    return this.http.get<ReviewModal[]>('http://localhost:8080/api/retrieveReviews?rindex='+String(rMaxCount)+'&BookID='+bookid);
  }

  postReviewData(reviewData: ReviewPostData) {
    console.log(reviewData);
    const postheaders = new HttpHeaders()
        return this.http.post<any>(
      'http://localhost:8080/api/addReviews',
      reviewData, {observe:'response'}
    );
  }

  signUpUser(userData: any){
    return this.http.post<any>(
      'http://localhost:8080/api/signUp',
      userData
    );
  }

  loginAuth(loginData: any): Observable<LoginModal>{
    return this.http.post<LoginModal>('http://localhost:8080/api/login',
    loginData)
  }

  getTopBooks(bookId: number): Observable<TopBooksModel[]>{
    return this.http.get<TopBooksModel[]>('http://localhost:8080/api/fetchTopBooksForGenre?id='+bookId);
  }
}
