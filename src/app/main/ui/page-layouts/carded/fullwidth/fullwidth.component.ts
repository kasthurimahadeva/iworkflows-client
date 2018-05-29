import { Component, OnDestroy, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

import { FuseConfigService } from '@fuse/services/config.service';
import { FuseMatchMediaService } from '@fuse/services/match-media.service';

@Component({
    selector   : 'carded-fullwidth',
    templateUrl: './fullwidth.component.html',
    styleUrls  : ['./fullwidth.component.scss']
})
export class CardedFullWidthComponent implements OnInit, OnDestroy
{
    // Private
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {FuseConfigService} _fuseConfigService
     * @param {FuseMatchMediaService} _fuseMatchMediaService
     */
    constructor(
        private _fuseConfigService: FuseConfigService,
        private _fuseMatchMediaService: FuseMatchMediaService
    )
    {
        // Configure the layout
        this._fuseConfigService.config = {
            layout: {
                containerScroll: false
            }
        };

        // Set the private defaults
        this._unsubscribeAll = new Subject();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        // Enable the containerScroll on small screen
        // devices to get more screen real estate
        this._fuseMatchMediaService.onMediaChange
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((alias) => {

                // If 'xs'
                if ( alias === 'xs' )
                {
                    // Set the containerScroll to true
                    this._fuseConfigService.config = {
                        layout: {
                            containerScroll: true
                        }
                    };
                }
                else
                {
                    // Set the containerScroll to false (route default)
                    this._fuseConfigService.config = {
                        layout: {
                            containerScroll: false
                        }
                    };
                }
            });
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void
    {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }
}
