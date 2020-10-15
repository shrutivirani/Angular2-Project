import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomersModule } from './customers/customers.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { OrdersModule } from './orders/orders.module';
// import { CustomersRoutingModule } from './customers/customers-routing.module';


@NgModule({
    imports: [
        BrowserModule,
        CoreModule, // for data.service and core.service
        CustomersModule,
        OrdersModule,
        SharedModule,
        AppRoutingModule,

    ],
    declarations: [
        AppComponent,
    ],
    providers: [],
    bootstrap: [AppComponent] //it means from where to start?
})
export class AppModule { }
