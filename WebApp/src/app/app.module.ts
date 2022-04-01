import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonMenuComponent } from './common-menu/common-menu.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu'
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatIconModule} from '@angular/material/icon'
import {MatSidenavModule} from '@angular/material/sidenav'
import {MatButtonModule} from '@angular/material/button'
import {MatDividerModule} from '@angular/material/divider'
import {MatTreeModule} from '@angular/material/tree'
import { HttpClientModule } from '@angular/common/http';
import { MatListModule } from '@angular/material/list'
import { MatTabsModule } from '@angular/material/tabs';
import { CommunityComponent } from './community/community.component';
import { HomepageComponent } from './homepage/homepage.component'
import { CarouselModule } from 'ngx-owl-carousel-o';
import { GenreBooksComponent } from './genre-books/genre-books.component';
import { MyBooksComponent } from './my-books/my-books.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatCardModule} from '@angular/material/card';
import { BookAttributesComponent } from './book-attributes/book-attributes.component';
import { BookReviewsComponent } from './book-reviews/book-reviews.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { MatExpansionModule } from '@angular/material/expansion'
import { MatGridListModule } from '@angular/material/grid-list'

 @NgModule({
  declarations: [
    AppComponent,
    CommonMenuComponent,
    LoginComponent,
    CommunityComponent,
    HomepageComponent,
    GenreBooksComponent,
    MyBooksComponent,
    BookAttributesComponent,
    BookReviewsComponent,
    BookDetailsComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatInputModule,
    MatSliderModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    MatDividerModule,
    MatTreeModule,
    HttpClientModule,
    MatListModule,
    MatTabsModule,
    CarouselModule,
    NgbModule,
    MatSnackBarModule,
    MatCardModule,
    MatExpansionModule,
    MatGridListModule,
  ],
  exports: [ MatNativeDateModule,
    MatInputModule,
    MatSliderModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    MatDividerModule,
    MatTreeModule,
    HttpClientModule,
    MatListModule,
    MatTabsModule,
    MatSnackBarModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
