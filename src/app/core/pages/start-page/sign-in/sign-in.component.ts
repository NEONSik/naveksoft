import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../../services/auth/auth.service';
import {Subscription} from 'rxjs';
import {WebsocketService} from '../../../services/websocket/websocket.service';
import {Router} from '@angular/router';
import {AuthResponseInterface} from '../../../interfaces/responses/auth-response.interface';
import {UserService} from '../../../services/user/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit, OnDestroy {
  private subscription$ = new Subscription();

  public hide = true;
  public form: FormGroup = this.formBuilder.group({
    email: ['test@gmail.com', [Validators.email, Validators.required]],
    password: ['12345678', [Validators.minLength(8), Validators.required]],
  });


  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private userService: UserService,
              private router: Router,
              private websocketService: WebsocketService) {
  }

  public ngOnInit(): void {
  }

  public login(): void {
    if (this.form.valid) {
      this.subscription$.add(this.authService.login(this.form.getRawValue())
        .subscribe((response) => {
          this.authMethod(response);
          // this.websocketService.websocketClient();
        }));
    }
  }

  private authMethod(response: AuthResponseInterface): void {
    this.authService.setToken(response.token.access_token);
    this.authService.getToken();
    this.authService.setUser(response.user);
    this.navigateToBoard();
  }

  private navigateToBoard(): void {
    this.router.navigate(['dashboard']);
  }

  public ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }
}
