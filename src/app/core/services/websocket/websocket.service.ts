import {Injectable} from '@angular/core';
import Echo from 'laravel-echo';


@Injectable({
  providedIn: 'root'
})
export class WebsocketService {


  constructor() {
  }

  // public websocketClient() {
  //   window.Pusher = require('pusher-js');
  //   window.Echo = new Echo({
  //     broadcaster: 'pusher',
  //     key: 'key',
  //     wsHost: 'guest-book.naveksoft.com',
  //     wsPort: '6001',
  //     wssPort: '443',
  //     wsPath: '/ws',
  //     encrypted: true,
  //     authEndpoint: 'https://guest-book.naveksoft.com/broadcasting/auth',
  //     auth: {
  //       headers: {
  //         Authorization: `Bearer ${localStorage.getItem('token')}`,
  //         Accept: `application/json`
  //       },
  //     },
  //     enabledTransports: ['ws', 'wss'],
  //     disableStats: true
  //   });
  //   let channel = window.Echo.private(`user.' + ${localStorage.getItem('user_id')}`);
  //   channel.listen('PublicPush', data => {
  //     console.log(data);
  //     }
  //   );
  // }

}
