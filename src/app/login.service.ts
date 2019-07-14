import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {User} from './model/user';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private host = 'http://localhost:8080';
  private token: string = null;
  constructor(private http: HttpClient) { }

  public login(user) {
    return this.http.post(this.host + '/login', user);

  }

  public listeUser(): Observable<User[]> {
    return this.http
      .get(this.host + '/admin/listUser').pipe(
        map((data)  => data as User[]));
  }


  public addUser(user: User) {

    return this.http.post(this.host + '/admin/addUser', user );
  }
  public editUser(user: User) {

    return this.http.post(this.host + '/users/editUser', user );
  }
  public deleteUser(user: User) {

    return this.http.post(this.host + '/admin/luser' , user );

  }
  public addAbonnement(ab) {

    return this.http.post(this.host + '/admin/addAbonnement' , ab );

  }

  public roles()  {

    return this.http.get(this.host + '/admin/lrole' );

  }

  public findVillage(nomVillage) {
    return  this.http.get(this.host + '/admin/findVillage/' + nomVillage );
  }
}
