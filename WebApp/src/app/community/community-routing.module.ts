import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonMenuComponent } from '../common-menu/common-menu.component';
const routes: Routes = [];

@NgModule({
    declarations:[CommonMenuComponent],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class CommunityRoutingModule { }