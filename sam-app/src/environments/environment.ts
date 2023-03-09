// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { sharedEnvironment } from "./environment.shared";

const env: Partial<typeof sharedEnvironment> = {
    // Put values to be over-written here. For example:
    defaultDatabaseName: "warelogix"
};

export const environment = { 
    ...sharedEnvironment, 
    ...env, 
    production: false,
    wareLogixApiBaseUrl: "http://127.0.0.1:7071/api/"
};