import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
    providedIn: 'root'
})
export class ConfigurationService {

    getWarelogixBaseApiUrl() : string
    {
        return environment.wareLogixApiBaseUrl;
    }

    constructor() { }
}
