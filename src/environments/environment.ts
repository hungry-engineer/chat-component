// The file contents for the current environment will overwrite these during build2.
// The build2 system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build2 --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

// tslint:disable-next-line:max-line-length
// import { firebaseConfig } from '../environments/firebase-config'; // please comment on this line when changing the values ​​of firebase {}

export const environment = {
  production: false,
  version: require('../../package.json').version, // https://stackoverflow.com/questions/34907682/how-to-display-app-version-in-angular2
  remoteConfig: true,
  remoteConfigUrl: '/firebase-config.json',
  firebase: {
    // apiKey: 'CHANGEIT',
    // authDomain: 'CHANGEIT',
    // databaseURL: 'CHANGEIT',
    // projectId: 'CHANGEIT',
    // storageBucket: 'CHANGEIT',
    // messagingSenderId: 'CHANGEIT'

    apiKey: 'AIzaSyDWMsqHBKmWVT7mWiSqBfRpS5U8YwTl7H0',
    authDomain: 'chat-v2-dev.firebaseapp.com',
    databaseURL: 'https://chat-v2-dev.firebaseio.com',
    projectId: 'chat-v2-dev',
    storageBucket: 'chat-v2-dev.appspot.com',
    messagingSenderId: '77360455507'

    // apiKey: firebaseConfig.apiKey,
    // authDomain: firebaseConfig.authDomain,
    // databaseURL: firebaseConfig.databaseURL,
    // projectId: firebaseConfig.projectId,
    // storageBucket: firebaseConfig.storageBucket,
    // messagingSenderId: firebaseConfig.messagingSenderId
  },
  apiUrl: 'https://api.tiledesk.com/v1/',
  tenant: 'tilechat',
  defaultLang : 'en',
  shemaVersion : '1'
};
