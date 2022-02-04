import { Component, OnInit } from '@angular/core';
import { AppService } from '../services/api.service';

@Component({
  selector: 'app-genre-books',
  templateUrl: './genre-books.component.html',
  styleUrls: ['./genre-books.component.scss']
})
export class GenreBooksComponent implements OnInit {

  constructor(private api:AppService) { }
  genreId: string = '5'
  genreDetails:Array<any>=[]
  ngOnInit(): void {
    console.log('entered genre');
    this.api.getGenreDetails(this.genreId).subscribe((data)=>{
      this.genreDetails = data;
      console.log(this.genreDetails);
    })
  }

}
