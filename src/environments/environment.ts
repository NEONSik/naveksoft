// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiEndpoint: 'https://guest-book.naveksoft.com/api/v1/',
  broadcaster: 'pusher',
  key: 'key',
  wsHost: 'guest-book.naveksoft.com',
  wsPort: '443',
  wssPort: '443',
  wsPath: '/ws',
  encrypted: true,
  authEndpoint: 'https://guest-book.naveksoft.com/broadcasting/auth',
  auth: {
    headers: {
      // Authorization: `Bearer ${Ваш токен}`,
      Accept: `application/json`
    },
  },
  enabledTransports: ['ws', 'wss'], // https://github.com/beyondcode/laravel-websockets/issues/86
  disableStats: true,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
