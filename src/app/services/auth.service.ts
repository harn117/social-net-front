import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs";

import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private url = environment.apiUrl;
  public profileData = {};
  constructor(private http: HttpClient) { }
  authorization = {headers: {Authorization: 'Bearer ' + this.getToken()}};

  validate(): Observable<Object> {
    return this.http.get(this.url + 'validate', {headers: {Authorization: 'Bearer ' + this.getToken()}});
  }

  storeValidateInformation(id: any, data: any): Observable<Object> {
    return this.http.post(this.url + 'auth/resources/users/' + id, data, {headers: {Authorization: 'Bearer ' + this.getToken()}});
  }

  login(data: any): Observable<Object> {
    return this.http.post(this.url + 'auth/login', data);
  }
  logout(): void {
    localStorage.removeItem('ACCESS_TOKEN');
    location.replace('/login');
  }
  tokenExists(): boolean {
    return !!localStorage.getItem('ACCESS_TOKEN');
  }
  saveToken(token: string): void {
    localStorage.setItem('ACCESS_TOKEN', token);
  }
  getToken(): string {
    return <string>localStorage.getItem('ACCESS_TOKEN');
  }
  getUser(): Observable<any> {
    return this.http.get(this.url + 'resources/users', this.authorization);
  }
}
