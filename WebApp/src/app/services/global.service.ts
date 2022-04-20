import { Injectable } from '@angular/core';
import { GenreDetailsModel, GenreModel, IndividualRatings, ReviewModal } from '../models/general-models';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
    public activePage=''
    public preGenreBooks: GenreDetailsModel[]=[]
    public bookIDglb: string = '';
    public glbRating!:IndividualRatings; 
    public glbReviews:ReviewModal[]=[];
    genreData:GenreModel={
      Id: '',
      Name: '',
      Description: ''
    }
    constructor() { 
        this.activePage = 'home'
    }
}
