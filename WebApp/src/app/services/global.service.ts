import { Injectable } from '@angular/core';
import { GenreDetailsModel, GenreModel } from '../models/general-models';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
    public activePage=''
    public preGenreBooks: GenreDetailsModel[]=[]
    genreData:GenreModel={
      Id: '',
      Name: '',
      Description: ''
    }
    constructor() { 
        this.activePage = 'home'
    }
}
