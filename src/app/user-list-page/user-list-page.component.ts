import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private readonly userService: UserService, private readonly router: Router) { }

  ngOnInit() {
    this.headerTable = headerTable
    this.getUsers();
  }

  private getUsers(): void {
    this.userService.getUserList().subscribe(users => this.userList = users);
  }

  public deleteUser(id: number): void {
    this.userList = this.userList.filter(user => user.id !== id)
    this.userService.deleteUser(id).subscribe();
  }

  public navigateToUserForm(type: string): void {
    if (type === 'edit')
      this.router.navigate(['edit-user'])
    if (type === 'create')
      this.router.navigate(['create-user'])
  }

}
