import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GenreModel } from '../models/general-models';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  getGenres(): Observable<GenreModel[]>{
    return this.http.get<GenreModel[]>('http://localhost:4200/api/getGenres');
  }
  getGenreDetails(genreid:string):Observable<any>{
    return this.http.get('http://localhost:4200/api/fetchGenreBooks?id='+genreid);
  }
}
