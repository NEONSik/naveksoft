import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CommonModule} from '@angular/common';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {TokenInterceptor} from './intercepter/token.intercepter';
import {SharedModule} from './core/shared/shared.module';
import {WebsocketService} from './core/services/websocket/websocket.service';
import {JwtService} from './core/guards/jwt.service';
import {JWT_OPTIONS, JwtHelperService, JwtModule, JwtModuleOptions} from '@auth0/angular-jwt';
import {AuthGuardService} from './core/guards/auth-service.service';

// export const echoConfig: SocketIoEchoConfig = {
//   broadcaster: 'pusher',
//   key: 'key',
//   wsHost: 'guest-book.naveksoft.com',
//   wsPort: '443',
//   wssPort: '443',
//   wsPath: '/ws',
//   encrypted: true,
//   authEndpoint: 'https://guest-book.naveksoft.com/broadcasting/auth',
//   auth: {
//     headers: {
//       Authorization: `Bearer sdafsadgsadg`,
//       Accept: `application/json`
//     },
//   },
//   enabledTransports: ['ws', 'wss'], // https://github.com/beyondcode/laravel-websockets/issues/86
//   disableStats: true,
// }

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true,
  },
    {provide: JWT_OPTIONS, useValue: JWT_OPTIONS},
    JwtHelperService,
    // EchoService,
    // { provide: ECHO_CONFIG, useValue: echoConfig }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
