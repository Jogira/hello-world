import { BadInput } from './../common/bad-input';
import { NotFoundError } from './../common/not-found-error';
import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { AppError } from '../common/app-error';
import { map, switchMap } from 'rxjs/operators';



export class DataService {
    // private url;

    constructor(private url: string, private http: HttpClient) { }

    getAll() {
        return this.http.get(this.url)
            .pipe(catchError(this.handleError), map((response: any) => response));
    }

    create(resource: any) {
        // return throwError(new AppError());

        return this.http.post(this.url, JSON.stringify(resource))
            .pipe(catchError(this.handleError), map((response: any) => response));
    }

    update(resource: any) {
        return this.http.patch(this.url + "/" + resource.id, JSON.stringify({ isRead: true }))
            .pipe(catchError(this.handleError), map((response: any) => response));
    }

    delete(id: any) {
        return this.http.delete(this.url + '/' + id)
            .pipe(catchError(this.handleError), map((response: any) => response));
    }


    private handleError(error: Response) {

        if (error.status === 400) {
            return throwError(new BadInput(error.json()));
        }

        if (error.status === 404) {
            return throwError(new NotFoundError());
        }
        return throwError(new AppError(error));
    }
}
