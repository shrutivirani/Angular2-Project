import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomersComponent } from './customers/customers.component';
import { OrdersComponent } from './orders/orders.component';

const routes: Routes = [
    // {path:'', pathMatch:'full', redirectTo:'/customers'},
    {path:'customers', component:CustomersComponent},
    {path:'orders/:id', component:OrdersComponent},

];

@NgModule({
    imports:[ RouterModule.forRoot(routes) ],
    exports:[ RouterModule ]

})

export class AppRoutingModule {

}
