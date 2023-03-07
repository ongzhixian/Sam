import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, delay, catchError, map } from 'rxjs/operators';
import { ConfigurationService } from './configuration.service';


@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    readonly isLoggedInStorageKey: string = 'isUserLoggedIn';

    isUserLoggedIn: boolean = false;

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    login(userName: string, password: string): Observable<boolean> {

        const authUrl = `${this.config.getWarelogixBaseApiUrl()}authentication-ticket`;

        var postBody = JSON.stringify({
            "Username": userName,
            "Password": password
        });

        return this.http.post(authUrl, postBody, this.httpOptions).pipe(
            tap(loginAccountDetail => console.info("%s success", authUrl)),
            map(loginAccountDetail => {
                return this.isUserLoggedIn = loginAccountDetail 
                    ? (localStorage.setItem(this.isLoggedInStorageKey, JSON.stringify(loginAccountDetail)), true) 
                    : false;
            }),
            catchError(httpErrorResponse => {
                console.warn(httpErrorResponse);
                return of(false);
            })
        );
    }

    hasLoggedIn(): boolean {

        //return localStorage.getItem(this.isLoggedInStorageKey) == null ? false : true;
        return this.isUserLoggedIn;
    }

    logout(): void {
        this.isUserLoggedIn = false;
        localStorage.removeItem(this.isLoggedInStorageKey);
    }

    // private handleError<T>(operation = 'operation', result?: T) {
    //     return (error: any): Observable<T> => {
    //         // TODO: send the error to remote logging infrastructure
    //         console.error(error); // log to console instead
    //         // TODO: better job of transforming error for user consumption
    //         console.log(`${operation} failed: ${error.message}`);
    //         // Let the app keep running by returning an empty result.
    //         return of(result as T);
    //     };
    // }

    constructor(private http: HttpClient, private config: ConfigurationService) { }
}