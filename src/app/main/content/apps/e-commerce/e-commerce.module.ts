import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { FuseEcommerceDashboardComponent } from './dashboard/dashboard.component';
import { EcommerceDashboardService } from './dashboard/dashboard.service';
import { SharedModule } from '../../../../core/modules/shared.module';
import { FuseWidgetModule } from '../../../../core/components/widget/widget.module';
import { FuseEcommerceProductsComponent } from './products/products.component';
import { EcommerceProductsService } from './products/products.service';
import { FuseEcommerceProductComponent } from './product/product.component';
import { EcommerceProductService } from './product/product.service';
import { FuseEcommerceOrdersComponent } from './orders/orders.component';
import { EcommerceOrdersService } from './orders/orders.service';
import { FuseEcommerceOrderComponent } from './order/order.component';
import { EcommerceOrderService } from './order/order.service';
import { AgmCoreModule } from '@agm/core';

const routes: Routes = [
    {
        path     : 'dashboard',
        component: FuseEcommerceDashboardComponent,
        resolve  : {
            data: EcommerceDashboardService
        }
    },
    {
        path     : 'products',
        component: FuseEcommerceProductsComponent,
        resolve  : {
            data: EcommerceProductsService
        }
    },
    {
        path     : 'products/:id',
        component: FuseEcommerceProductComponent,
        resolve  : {
            data: EcommerceProductService
        }
    },
    {
        path     : 'products/:id/:handle',
        component: FuseEcommerceProductComponent,
        resolve  : {
            data: EcommerceProductService
        }
    },
    {
        path     : 'orders',
        component: FuseEcommerceOrdersComponent,
        resolve  : {
            data: EcommerceOrdersService
        }
    },
    {
        path     : 'orders/:id',
        component: FuseEcommerceOrderComponent,
        resolve  : {
            data: EcommerceOrderService
        }
    }

];

@NgModule({
    imports     : [
        SharedModule,
        RouterModule.forChild(routes),
        FuseWidgetModule,
        NgxChartsModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyD81ecsCj4yYpcXSLFcYU97PvRsE_X8Bx8'
        })
    ],
    declarations: [
        FuseEcommerceDashboardComponent,
        FuseEcommerceProductsComponent,
        FuseEcommerceProductComponent,
        FuseEcommerceOrdersComponent,
        FuseEcommerceOrderComponent
    ],
    providers   : [
        EcommerceDashboardService,
        EcommerceProductsService,
        EcommerceProductService,
        EcommerceOrdersService,
        EcommerceOrderService
    ]
})
export class FuseEcommerceModule
{
}
