import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../services/app.service';
import { GlobalService } from '../services/global.service';

@Component({
  selector: 'app-common-menu',
  templateUrl: './common-menu.component.html',
  styleUrls: ['./common-menu.component.scss']
})
export class CommonMenuComponent implements OnInit {

  constructor(private api:AppService, private router:Router, 
              public global:GlobalService) { }
  public genres = [{Id: 1, Name: "Comedy", Description: "Comedy", Count: 5},
  {Id: 2, Name: "Romance", Description: "Romance", Count: 8},
  {Id: 3, Name: "Mystery", Description: "Mystery", Count: 10},
  {Id: 4, Name: "Thriller", Description: "Thriller", Count: 6},
  {Id: 5, Name: "Horror", Description: "Horror", Count: 5},
  {Id: 6, Name: "Suspense", Description: "Suspense", Count: 12}]
  opened:boolean = false;
  ngOnInit(): void {
    this.api.getGenres().subscribe((data)=>{
      console.log(data);
    });
  }

  goToHome(){
    this.opened = !this.opened;
    this.global.activePage='home';
  }
  goToGenre(genre:string){
    this.opened = !this.opened;
    this.global.activePage='genre/:'+genre;
  }
  goToMyBooks(){
    this.opened = !this.opened;
    this.global.activePage='mybooks';
  }
  goToCommunity(){
    this.opened = !this.opened;
    this.global.activePage='community';
  }

}
