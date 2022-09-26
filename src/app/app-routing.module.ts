import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserFormPageComponent } from './user-form-page/user-form-page.component';
import { UserListPageComponent } from './user-list-page/user-list-page.component';

const routes: Routes = [
  { path: 'user-list', component: UserListPageComponent },
  { path: 'create-user', component: UserFormPageComponent },
  { path: 'edit-user/:id', component: UserFormPageComponent },
  { path: '', redirectTo: '/user-list', pathMatch: 'prefix' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
