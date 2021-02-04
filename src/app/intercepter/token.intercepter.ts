import {Injectable} from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler, HttpHeaders,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable';
import {tap} from 'rxjs/operators';
import {AuthService} from '../core/services/auth/auth.service';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class TokenInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {

    const accessToken = localStorage.getItem('token');

    const config: any = {};

    if (accessToken) {
      config.headers = new HttpHeaders({
        Authorization: 'Bearer ' + accessToken,
      });
    }

    request = request.clone(config);

    return next.handle(request).pipe(
      tap(
        (event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
            if (event.status === 302) {
            }
          }
        },
        (err: any) => {
          if (err instanceof HttpErrorResponse) {
            if (err.status === 401) {
              this.authService.logout();
              this.router.navigate(['']);
            }
          }
        },
      ),
    );
  }

  constructor(private authService: AuthService,
              private router: Router) {
  }
}
