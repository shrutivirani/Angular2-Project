import { Component, OnInit } from '@angular/core';
import { ICustomers } from '../shared/interfaces';
import { DataService } from '../core/data.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  title: string;
  people: ICustomers[];
//   isVisible=true;
//   visibility(){
//     this.isVisible = !this.isVisible;
//   }
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.title = 'Customers';

    this.dataService.getCustomers()
        .subscribe((customers: ICustomers[]) => this.people = customers);

    // this.people = [
    //     { id: 1, name: 'john Doe', city: 'Phoenix', orderTotal: 9.99, customerSince: new Date(2014, 7, 10) },
    //     { id: 2, name: 'Jane Doe', city: 'Chandler', orderTotal: 19.99, customerSince: new Date(2017, 2, 22)},
    //     { id: 3, name: 'Michelle Thomas', city: 'Seattle', orderTotal: 99.99, customerSince: new Date(2002, 10, 31)},
    //     { id: 4, name: 'Jim Thomas', city: 'New York', orderTotal: 599.99, customerSince: new Date(2002, 10, 31)},
    // ];
  }

}
