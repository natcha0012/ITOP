import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PageOptions } from 'src/models/page-options.model';
import { User } from 'src/models/user.model';
import { UserService } from '../services/user.service';
import { headerTable } from './user-list-page.constant';

@Component({
  selector: 'app-user-list-page',
  templateUrl: './user-list-page.component.html',
  styleUrls: ['./user-list-page.component.css']
})
export class UserListPageComponent implements OnInit {

  public headerTable: string[] = [];
  public userList: User[] = []
  public pageOptions: PageOptions = { skip: 0, limit: 4, total: 0 };

  constructor(private readonly userService: UserService, private readonly router: Router) { }

  ngOnInit() {
    this.headerTable = headerTable
    this.getUsers(this.pageOptions);
  }

  private getUsers(pageOptions: PageOptions): void {
    this.userService.getUserList(pageOptions).subscribe((user: any) => {
      this.userList = user.items
      this.pageOptions = {
        skip: pageOptions.skip,
        limit: pageOptions.limit,
        total: user.total
      }
    });
  }

  public deleteUser(id: number): void {
    this.userList = this.userList.filter(user => user.id !== id)
    this.userService.deleteUser(id).subscribe();
  }

  public navigateToUserForm(id?: number): void {
    if (id)
      this.router.navigate([`edit-user/${id}`])
    else
      this.router.navigate(['create-user'])
  }

  public updatePage(pageOptions: PageOptions): void {
    this.pageOptions = pageOptions
    this.getUsers(this.pageOptions);
  }

}
