import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommunityComponent } from './community/community.component';
import { CommonMenuComponent } from './common-menu/common-menu.component';
import { LoginComponent } from './login/login.component';
import { GenreBooksComponent } from './genre-books/genre-books.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MyBooksComponent } from './my-books/my-books.component';

const routes: Routes = [

  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: '',
    children: [
      { path: 'login', component: LoginComponent},
      { path: 'home', component: HomepageComponent},
      { path: 'community', component: CommunityComponent},
      { path:'genre/:id',component:GenreBooksComponent},
      { path:'myBooks',component:MyBooksComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
