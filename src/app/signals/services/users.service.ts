import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { SingleUserReponse, User } from '../interfaces/user-request.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private http = inject( HttpClient )
  private baseUrl = 'https://reqres.in/api/users'
  // private baseUrl = 'https://jsonplaceholder.typicode.com/users'

  getUserById( id: number ): Observable<User> {
    const url = `${ this.baseUrl }/${ id }`
    return this.http.get<SingleUserReponse>( url )
      .pipe(
        map( resp => resp.data ),
        tap( console.log )
      )
  }
}
