import { sharedEnvironment } from "./environment.shared";

const env: Partial<typeof sharedEnvironment> = {
    // Put values to be over-written here. For example:
    defaultDatabaseName: "warelogix"
};

export const environment = { 
    ...sharedEnvironment, 
    ...env, 
    production: true,
    wareLogixApiBaseUrl: "http://127.0.0.1:7071/api/"
};