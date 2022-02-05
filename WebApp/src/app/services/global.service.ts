import { Injectable } from '@angular/core';
import { GenreModel } from '../models/general-models';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
    public activePage=''
    genreData:GenreModel={
      Id: '',
      Name: '',
      Description: ''
    }
    constructor() { 
        this.activePage = 'home'
    }
}
