import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GenreDetailsModel, GenreModel } from '../models/general-models';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  getGenres(): Observable<GenreModel[]>{
    return this.http.get<GenreModel[]>('http://localhost:4200/api/getGenres');
  }
  getGenreDetails(genreid:string):Observable<GenreDetailsModel[]>{
    return this.http.get<GenreDetailsModel[]>('http://localhost:4200/api/fetchGenreBooks?id='+genreid);
  }
}
