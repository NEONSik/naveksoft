import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserService} from '../../services/user/user.service';
import {Subscription} from 'rxjs';
import {AuthService} from '../../services/auth/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit, OnDestroy {
  public token: string | null = '';
  private subscription$ = new Subscription();

  constructor(private userService: UserService,
              private router: Router,
              private authService: AuthService) {
  }

  public ngOnInit(): void {
    this.getToken();
  }

  private getToken(): void {
    this.authService.getToken();
    this.authService.token.subscribe((response) => {
      this.token = response;
    });
  }


  public logOut(): void {
    this.authService.logout();
    this.getToken();
    this.router.navigate(['']);
  }

  public ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }
}
