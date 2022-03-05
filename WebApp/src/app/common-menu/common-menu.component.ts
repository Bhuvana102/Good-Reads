import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar, _SnackBarContainer } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { GenreModel } from '../models/general-models';
import { AppService } from '../services/api.service';
import { GlobalService } from '../services/global.service';

@Component({
  selector: 'app-common-menu',
  templateUrl: './common-menu.component.html',
  styleUrls: ['./common-menu.component.scss']
})
export class CommonMenuComponent implements OnInit {

  constructor(private api: AppService, private router: Router,
    public global: GlobalService, private snackbar: MatSnackBar) { }
  public genres: GenreModel[] = [];
  opened: boolean = false;
  ngOnInit(): void {
    this.api.getGenres().subscribe((data: GenreModel[]) => {
      console.log(data);
      this.genres = data;
    });
  }

  goToHome() {
    this.opened = !this.opened;
    this.global.activePage = 'home';
    this.router.navigate(['/home']);
  }
  goToGenre(genre: string) {
    this.opened = !this.opened;
    this.global.activePage = 'genre';
    console.log(this.genres);
    this.global.genreData = this.genres.filter(genreItem => genreItem.Id === genre)[0];
    console.log(this.global.genreData);
    this.router.navigate(['/genre/' + String(genre)]);
  }
  goToMyBooks() {
    this.opened = !this.opened;
    this.global.activePage = 'mybooks';
    this.router.navigate(['/myBooks']);
  }
  goToCommunity() {
    this.opened = !this.opened;
    this.global.activePage = 'community';
    this.router.navigate(['/community']);
  }
  logOut(){
    this.snackbar.open('Logged Out','',{duration:1000})
    this.router.navigate(['/login'] ,{replaceUrl: true} );
  }
}
