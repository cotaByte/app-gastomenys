import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URL, HEADERS } from '../../app.constants';
import { Observable } from 'rxjs';

export type logInCredentials = {
  username: string | null;
  password: string | null;
};

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  constructor(public http: HttpClient) {}

  public logIn(credentials: logInCredentials): Observable<any> {
    const body = {
      user: credentials.username,
      password: credentials.password,
    };

    return this.http.post<any>(`${URL}/login`, body, { headers: HEADERS });
  }
}
