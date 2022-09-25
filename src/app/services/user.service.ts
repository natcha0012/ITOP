import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from 'src/models/user.model';



@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {
  }

  public getUserList() {
    return this.http.get<User[]>(environment.API.USER);
  }

  public deleteUser(id: number) {
    console.log('delete user', id)
    return this.http.delete(`${environment.API.USER}/${id}`);
  }
}
