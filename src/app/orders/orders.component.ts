import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { DataService } from '../core/data.service';
import { ICustomers, IOrder, IOrderItem } from '../shared/interfaces';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: [ './orders.component.css' ]
})
export class OrdersComponent implements OnInit {

  customer: ICustomers;
  orders: IOrder[] = [];
  currencyCode: string = 'INR';

  constructor(private dataService: DataService,
              private route: ActivatedRoute) { }

  ngOnInit() {

    let id = +this.route.snapshot.paramMap.get('id'); // + indicates ParseInt()

    this.dataService.getOrder(id).subscribe((orders: IOrder[]) => {
        this.orders = orders;
    });



    this.dataService.getCustomer(id).subscribe((customer: ICustomers) => {
      this.customer = customer;
    });
  }

}