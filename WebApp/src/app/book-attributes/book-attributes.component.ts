import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { GlobalService } from '../services/global.service';


@Component({
  selector: 'app-book-attributes',
  templateUrl: './book-attributes.component.html',
  styleUrls: ['./book-attributes.component.scss']
})
export class BookAttributesComponent implements OnInit {
  bookId: any;
  selectedbook: any;
  constructor(private api: ApiService, private route: ActivatedRoute, public global: GlobalService,
    private router: Router) {
    this.bookId = this.route.snapshot.params.id;

  }



  ngOnInit(): void {
    this.selectedbook = this.global.preGenreBooks.filter(x => x.ID == this.bookId)[0];
  }

}
