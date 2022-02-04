import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../services/api.service';
import { GlobalService } from '../services/global.service';

@Component({
  selector: 'app-common-menu',
  templateUrl: './common-menu.component.html',
  styleUrls: ['./common-menu.component.scss']
})
export class CommonMenuComponent implements OnInit {

  constructor(private api:AppService, private router:Router, 
              public global:GlobalService) { }
  public genres:Array<any> = [];
  opened:boolean = false;
  ngOnInit(): void {
    this.api.getGenres().subscribe((data)=>{
      console.log(data);
      this.genres = data;
    });
  }

  goToHome(){
    this.opened = !this.opened;
    this.global.activePage='home';
  }
  goToGenre(genre:string){
    this.opened = !this.opened;
    this.global.activePage='genre';
    this.router.navigate(['/genre']);
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
