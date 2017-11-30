import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { EcommerceOrderService } from './order.service';
import { fuseAnimations } from '../../../../../core/animations';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/observable/fromEvent';
import { Subscription } from 'rxjs/Subscription';
import { Order } from './order.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { orderStatuses } from './order-statuses';

@Component({
    selector     : 'fuse-e-commerce-order',
    templateUrl  : './order.component.html',
    styleUrls    : ['./order.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class FuseEcommerceOrderComponent implements OnInit, OnDestroy
{
    order = new Order();
    onOrderChanged: Subscription;
    statusForm: FormGroup;
    orderStatuses = orderStatuses;

    constructor(
        private orderService: EcommerceOrderService,
        private formBuilder: FormBuilder,
    )
    {

    }

    ngOnInit()
    {
        // Subscribe to update order on changes
        this.onOrderChanged =
            this.orderService.onOrderChanged
                .subscribe(order => {
                    this.order = new Order(order);
                });

        this.statusForm = this.formBuilder.group({
            newStatus: ['']
        });
    }

    updateStatus()
    {
        const newStatusId = Number.parseInt(this.statusForm.get('newStatus').value);

        if ( !newStatusId )
        {
            return;
        }

        const newStatus = this.orderStatuses.find((status) => {
            return status.id === newStatusId;
        });

        newStatus['date'] = new Date().toString();

        this.order.status.unshift(newStatus);
    }

    ngOnDestroy()
    {
        this.onOrderChanged.unsubscribe();
    }
}
