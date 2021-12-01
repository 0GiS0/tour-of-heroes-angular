// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  containerName: "alteregos",
  apiUrl: "https://localhost:5001/api/hero",
  appInsights: {
    instrumentationKey: "e69ae07b-5bce-42f9-90f7-37d1e34f8c90"
  },
  storageUrl: "http://127.0.0.1:10000/devstoreaccount1",
  signalRUrl: "https://localhost:7238/messaging"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
