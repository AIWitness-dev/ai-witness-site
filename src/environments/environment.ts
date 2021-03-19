// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase:{
    apiKey: "AIzaSyA6I8WedQ3mvfTuXr89UYgutfrKRBfVPEc",
    authDomain: "ai-witness.firebaseapp.com",
    databaseURL: "https://ai-witness-default-rtdb.firebaseio.com",
    projectId: "ai-witness",
    storageBucket: "ai-witness.appspot.com",
    messagingSenderId: "616511884811",
    appId: "1:616511884811:web:4e073b58351ef0aebe410e",
    measurementId: "G-86CEK50MC6"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
// For Firebase JS SDK v7.20.0 and later, measurementId is optional