import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {UserInterface} from '../../interfaces/models/user.interface';
import {AuthService} from '../auth/auth.service';

const storage = window.localStorage;

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public user = new BehaviorSubject<string>(null);

  constructor(private authService: AuthService) {
  }

  public setCurrentUser(user: string | null | UserInterface): void {
    this.user.next(JSON.stringify(user));
  }

  public getUser(): string | null {
    return storage.getItem('user');
  }
}
