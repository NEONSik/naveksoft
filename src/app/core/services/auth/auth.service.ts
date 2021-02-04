import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LoginInterface} from '../../interfaces/requests/login.interface';
import {BehaviorSubject, Observable, Subject, Subscription} from 'rxjs';
import {RegisterInterface} from '../../interfaces/requests/register.interface';
import {AuthResponseInterface} from '../../interfaces/responses/auth-response.interface';
import {UserInterface} from '../../interfaces/models/user.interface';
import {UserService} from '../user/user.service';

const storage = window.localStorage;

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  public token = new BehaviorSubject<string | null>('');

  constructor(private http: HttpClient, private userService: UserService) {
  }

  public login(model: LoginInterface): Observable<AuthResponseInterface> {
    return this.http.post<AuthResponseInterface>('/api/v1/auth/login', model);
  }

  public register(model: RegisterInterface): Observable<AuthResponseInterface> {
    return this.http.post<AuthResponseInterface>('/api/v1/auth/register', model);
  }

  public setToken(token: string): void {
    storage.setItem('token', token);
  }

  public getToken(): void {
    this.token.next(storage.getItem('token'));
  }


  public setUser(user: UserInterface): void {
    storage.setItem('user', JSON.stringify(user));
    this.userService.setCurrentUser(JSON.stringify(user));
  }

  public logout(): void {
    storage.removeItem('token');
  }
}
