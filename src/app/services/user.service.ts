import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PageOptions } from 'src/models/page-options.model';
import { User } from 'src/models/user.model';



@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {
  }

  public createUser(user: User) {
    return this.http.post(environment.API.USER, user);
  }

  public getUserList(pageOptions?: PageOptions) {
    const query = { ...pageOptions }
    delete query.total
    return this.http.get(environment.API.USER, {
      params: { ...query }
    });
  }

  public getUserByID(id: number) {
    return this.http.get<User>(`${environment.API.USER}/${id}`);
  }

  public updateUser(id: number, body: Partial<User>) {
    return this.http.put<User>(`${environment.API.USER}/${id}`, body);
  }

  public deleteUser(id: number) {
    return this.http.delete(`${environment.API.USER}/${id}`);
  }
}
