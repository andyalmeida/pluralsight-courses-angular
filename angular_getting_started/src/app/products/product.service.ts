import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, find, tap } from 'rxjs/operators';

import { IProduct } from './product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private productUrl = 'api/products/products.json';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.productUrl).pipe(
      tap((data) => console.log('All: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  getProduct(id: number): Observable<IProduct> {
    const products = this.getProducts();
    return products.pipe(
      map((products: IProduct[]) => products.find((p) => p.productId === id)),
      tap((data) => console.log('Product: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage =
      err.error instanceof ErrorEvent
        ? `An error occurred: ${err.error.message}`
        : `Server returned code: ${err.status}, error message is ${err.message}`;

    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
