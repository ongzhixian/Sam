import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from './message.service';
import { catchError, map, tap } from 'rxjs/operators';
import { Supplier } from '../modules/supplier/entities/supplier';
import { ConfigurationService } from './configuration.service';

export const SUPPLIERS: Supplier[] = [
    { id: "12", name: 'Dr. Nice' },
    { id: "13", name: 'Bombasto' },
    { id: "14", name: 'Celeritas' },
    { id: "15", name: 'Magneta' },
    { id: "16", name: 'RubberMan' },
    { id: "17", name: 'Dynama' },
    { id: "18", name: 'Dr. IQ' },
    { id: "19", name: 'Magma' },
    { id: "20", name: 'Tornado' }
];

@Injectable({
    providedIn: 'root'
})
export class SupplierService {

    private suppliersApiUrl = `${this.config.getWarelogixBaseApiUrl()}supplier`;

    getSuppliers(): Observable<Supplier[]> {
        this.messageService.add('SupplierService: fetched suppliers');
        return this.http
            .get<Supplier[]>(this.suppliersApiUrl)
            .pipe(
                tap(_ => this.log('fetched suppliers')),
                catchError(this.handleError<Supplier[]>('getSuppliers', []))
            );
    }

    getSupplier(id: string): Observable<Supplier> {
        // For now, assume that a hero with the specified `id` always exists.
        // Error handling will be added in the next step of the tutorial.
        const supplier = SUPPLIERS.find(h => h.id === id)!;
        const url = `${this.suppliersApiUrl}/${id}`;
        console.log("getSupplier", id);
        return this.http.get<Supplier>(url).pipe(
            tap(_ => this.log(`fetched supplier id=${id}`)),
            catchError(this.handleError<Supplier>(`getHero id=${id}`))
        );
        
        // this.messageService.add(`SupplierService: fetched supplier id=${id}`);
        // return of(supplier);
    }

    /**
 * Handle Http operation that failed.
 * Let the app continue.
 *
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // TODO: better job of transforming error for user consumption
            this.log(`${operation} failed: ${error.message}`);

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }

    private log(message: string) {
        this.messageService.add(`SupplierService: ${message}`);
    }

    constructor(
        private http: HttpClient
        , private messageService: MessageService
        , private config: ConfigurationService
        ) { }
}
