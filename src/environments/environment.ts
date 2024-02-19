// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  containerName: "alteregos",
  apiUrl: "https://localhost:5001/api/hero",
  appInsights: {
    instrumentationKey: "9ff425c5-0949-4e13-9970-fcd4066ce274"
  },
  storageUrl: "http://127.0.0.1:10000/devstoreaccount1"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
