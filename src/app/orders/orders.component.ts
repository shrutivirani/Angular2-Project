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

  orders: IOrder[] = [];
  customer: ICustomers;
  order: IOrder[] = [];

  constructor(private dataService: DataService,
              private route: ActivatedRoute) { }

  ngOnInit() {

    let id = +this.route.snapshot.paramMap.get('id');

    this.dataService.getOrder(id).subscribe((order: IOrder[]) => {
        this.order = order;
    });



    this.dataService.getCustomer(id).subscribe((customer: ICustomers) => {
      this.customer = customer;
    });
  }

}