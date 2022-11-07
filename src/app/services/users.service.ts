import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../interfaz';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {
    console.log('http service');
  }

  getUsers(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(
      'https://crudcrud.com/api/3e57ff64b6384c64a7ac2e62c0e4028b/usuarios'
    );
  }

  createUser(user: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(
      'https://crudcrud.com/api/3e57ff64b6384c64a7ac2e62c0e4028b/usuarios',
      user
    );
  }
}
