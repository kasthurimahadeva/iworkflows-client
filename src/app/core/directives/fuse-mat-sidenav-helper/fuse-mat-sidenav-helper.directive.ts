import { Directive, Input, OnInit, HostListener, OnDestroy, HostBinding } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { ObservableMedia } from '@angular/flex-layout';
import { Subscription } from 'rxjs/Subscription';
import { FuseMatchMedia } from '../../services/match-media.service';
import { FuseMatSidenavHelperService } from './fuse-mat-sidenav-helper.service';

@Directive({
    selector: '[fuseMatSidenavHelper]'
})
export class FuseMatSidenavHelperDirective implements OnInit, OnDestroy
{
    matchMediaSubscription: Subscription;

    @HostBinding('class.mat-is-locked-open') isLockedOpen = true;
    @HostBinding('class.mat-stop-transition') stopTransition = true;

    @Input('fuseMatSidenavHelper') id: string;
    @Input('mat-is-locked-open') matIsLockedOpenBreakpoint: string;

    constructor(
        private fuseMatSidenavService: FuseMatSidenavHelperService,
        private fuseMatchMedia: FuseMatchMedia,
        private observableMedia: ObservableMedia,
        private matSidenav: MatSidenav
    )
    {
    }

    ngOnInit()
    {
        this.fuseMatSidenavService.setSidenav(this.id, this.matSidenav);

        if ( this.observableMedia.isActive(this.matIsLockedOpenBreakpoint) )
        {
            setTimeout(() => {
                this.isLockedOpen = true;
                this.matSidenav.mode = 'side';
                this.matSidenav.open();
            });
            this.stopTransition = false;
        }
        else
        {
            setTimeout(() => {
                this.isLockedOpen = false;
                this.matSidenav.mode = 'over';
                this.matSidenav.close();
            });

            setTimeout(() => {
                this.stopTransition = false;
            }, 3000);
        }

        this.matchMediaSubscription = this.fuseMatchMedia.onMediaChange.subscribe(() => {
            if ( this.observableMedia.isActive(this.matIsLockedOpenBreakpoint) )
            {
                setTimeout(() => {
                    this.isLockedOpen = true;
                    this.matSidenav.mode = 'side';
                    this.matSidenav.open();
                });
            }
            else
            {
                setTimeout(() => {
                    this.isLockedOpen = false;
                    this.matSidenav.mode = 'over';
                    this.matSidenav.close();
                });
            }
        });

    }

    ngOnDestroy()
    {
        this.matchMediaSubscription.unsubscribe();
    }
}

@Directive({
    selector: '[fuseMatSidenavToggler]'
})
export class FuseMatSidenavTogglerDirective
{
    @Input('fuseMatSidenavToggler') id;

    constructor(private fuseMatSidenavService: FuseMatSidenavHelperService)
    {
    }

    @HostListener('click')
    onClick()
    {
        this.fuseMatSidenavService.getSidenav(this.id).toggle();
    }
}
