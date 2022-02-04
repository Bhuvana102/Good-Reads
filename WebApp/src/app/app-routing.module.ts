import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommunityComponent } from './community/community.component';
import { CommonMenuComponent } from './common-menu/common-menu.component';
import { LoginComponent } from './login/login.component';
import { GenreBooksComponent } from './genre-books/genre-books.component';

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
      { path: 'home', component: CommonMenuComponent},
      { path: 'community', component: CommunityComponent},
      { path:'genre/:id',component:GenreBooksComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
