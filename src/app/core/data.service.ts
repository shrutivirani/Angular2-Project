import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { ICustomers, IOrder } from '../../app/shared/interfaces';
import { Observable } from 'rxjs';

@Injectable()
export class DataService {
    baseUrl: string = 'assets/';
    constructor(private http: HttpClient){    }

    //get all customer
    getCustomers() :Observable<ICustomers[]> {
        return this.http.get<ICustomers[]>(this.baseUrl + 'customers.json')
        .pipe(
            catchError(this.handleError)
        );
    }

    //get customer by id
    getCustomer(id: number) :Observable<ICustomers> {
        return this.http.get<ICustomers[]>(this.baseUrl + 'customers.json')
        .pipe(
            map(customers => {
                let customer = customers.filter((cust: ICustomers) => cust.id === id);
                return (customer && customer.length) ? customer[0] : null;
            }),
            catchError(this.handleError)
        )
    }

    //get order by id
    getOrder(id: number) :Observable<IOrder[]> {
        return this.http.get<IOrder[]>(this.baseUrl + 'orders.json')
        .pipe(
            map(orders => {
                let custOrders = orders.filter((order: IOrder) => order.customerId === id);
            return custOrders;
          }),
          catchError(this.handleError)
        )
    }



    private handleError(error: any) {
        console.error('server error:', error);
        if (error.error instanceof Error) {
            const errMessage = error.error.message;
            return Observable.throw(errMessage);
            // Use the following instead if using lite-server
            // return Observable.throw(err.text() || 'backend server error');
        }
        return Observable.throw(error || 'Node.js server error');
      }

}
