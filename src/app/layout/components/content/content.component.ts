import { Component, HostBinding, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { takeUntil } from 'rxjs/operators';

import { fuseAnimations } from '@fuse/animations';
import { FuseConfigService } from '@fuse/services/config.service';

@Component({
    selector: 'content',
    templateUrl: './content.component.html',
    styleUrls: ['./content.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations
})
export class ContentComponent implements OnInit, OnDestroy
{
    fuseConfig: any;

    // @HostBinding('@routerTransitionUp')
    routeAnimationUp: boolean;

    // @HostBinding('@routerTransitionDown')
    routeAnimationDown: boolean;

    // @HostBinding('@routerTransitionRight')
    routeAnimationRight: boolean;

    // @HostBinding('@routerTransitionLeft')
    routeAnimationLeft: boolean;

    // @HostBinding('@routerTransitionFade')
    routeAnimationFade: boolean;

    // Private
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {ActivatedRoute} _activatedRoute
     * @param {FuseConfigService} _fuseConfigService
     * @param {Router} _router
     */
    constructor(
        private _activatedRoute: ActivatedRoute,
        private _fuseConfigService: FuseConfigService,
        private _router: Router
    )
    {
        // Set the defaults
        this.routeAnimationUp = false;
        this.routeAnimationDown = false;
        this.routeAnimationRight = false;
        this.routeAnimationLeft = false;
        this.routeAnimationFade = false;

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
        // Subscribe to the router events for router animations
        this._router.events
            .pipe(
                filter((event) => event instanceof NavigationEnd),
                map(() => this._activatedRoute)
            )
            .subscribe(() =>
            {
                switch (this.fuseConfig.routerAnimation)
                {
                    case 'fadeIn':
                        this.routeAnimationFade = !this.routeAnimationFade;
                        break;
                    case 'slideUp':
                        this.routeAnimationUp = !this.routeAnimationUp;
                        break;
                    case 'slideDown':
                        this.routeAnimationDown = !this.routeAnimationDown;
                        break;
                    case 'slideRight':
                        this.routeAnimationRight = !this.routeAnimationRight;
                        break;
                    case 'slideLeft':
                        this.routeAnimationLeft = !this.routeAnimationLeft;
                        break;
                }
            });

        // Subscribe to config changes
        this._fuseConfigService.config
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(
                (config) =>
                {
                    this.fuseConfig = config;
                }
            );
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
