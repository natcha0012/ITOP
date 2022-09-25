import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserService } from './services/user.service';
import { TableComponent } from './table/table.component';
import { UserListPageComponent } from './user-list-page/user-list-page.component';
import { HttpClientModule } from '@angular/common/http';
import { UserFormPageComponent } from './user-form-page/user-form-page.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    UserListPageComponent,
    UserFormPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
