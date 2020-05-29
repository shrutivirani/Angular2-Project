import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomersModule } from './customers/customers.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { OrdersComponent } from './orders/orders.component';
// import { CustomersRoutingModule } from './customers/customers-routing.module';


@NgModule({
    declarations: [
        AppComponent,
        OrdersComponent
    ],
    imports: [
        BrowserModule,
        CoreModule,
        CustomersModule,
        SharedModule,
        AppRoutingModule,

    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
