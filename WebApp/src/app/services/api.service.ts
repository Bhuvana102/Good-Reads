import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  GenreDetailsModel,
  GenreModel,
  ReviewPostData,
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

  postReviewData(reviewData: ReviewPostData) {
    console.log(reviewData);
    const postheaders = new HttpHeaders()
        return this.http.post<any>(
      'http://localhost:8080/api/addReviews',
      reviewData, {observe:'response'}
    );
  }
}
