import { Directive, Input, OnInit, HostListener, OnDestroy, HostBinding, AfterViewInit } from '@angular/core';
import { MdSidenav } from '@angular/material';
import { FuseMdSidenavHelperService } from 'app/core/directives/md-sidenav-helper/md-sidenav-helper.service';
import { FuseMatchMedia } from '../../services/match-media.service';
import { ObservableMedia } from '@angular/flex-layout';
import { Subscription } from 'rxjs/Subscription';

@Directive({
    selector: '[fuseMdSidenavHelper]'
})
export class FuseMdSidenavHelperDirective implements OnInit, AfterViewInit, OnDestroy
{
    matchMediaSubscription: Subscription;

    @HostBinding('class.md-is-locked-open') isLockedOpen = true;
    @HostBinding('class.md-stop-transition') stopTransition = true;

    @Input('fuseMdSidenavHelper') id: string;
    @Input('md-is-locked-open') mdIsLockedOpenBreakpoint: string;

    constructor(
        private fuseMdSidenavService: FuseMdSidenavHelperService,
        private fuseMatchMedia: FuseMatchMedia,
        private observableMedia: ObservableMedia,
        private mdSidenav: MdSidenav
    )
    {
    }

    ngOnInit()
    {
        this.fuseMdSidenavService.setSidenav(this.id, this.mdSidenav);

        if ( this.observableMedia.isActive(this.mdIsLockedOpenBreakpoint) )
        {
            setTimeout(() => {
                this.isLockedOpen = true;
                this.mdSidenav.mode = 'side';
                this.mdSidenav.open();
            });
        }
        else
        {
            setTimeout(() => {
                this.isLockedOpen = false;
                this.mdSidenav.mode = 'over';
                this.mdSidenav.close();
            });
        }

        this.matchMediaSubscription = this.fuseMatchMedia.onMediaChange.subscribe(() => {
            if ( this.observableMedia.isActive(this.mdIsLockedOpenBreakpoint) )
            {
                setTimeout(() => {
                    this.isLockedOpen = true;
                    this.mdSidenav.mode = 'side';
                    this.mdSidenav.open();
                });
            }
            else
            {
                setTimeout(() => {
                    this.isLockedOpen = false;
                    this.mdSidenav.mode = 'over';
                    this.mdSidenav.close();
                });
            }
        });

    }

    ngAfterViewInit()
    {
        setTimeout(() => {
            this.stopTransition = false;
        }, 0);
    }

    ngOnDestroy()
    {
        this.matchMediaSubscription.unsubscribe();
    }
}

@Directive({
    selector: '[fuseMdSidenavToggler]'
})
export class FuseMdSidenavTogglerDirective
{
    @Input('fuseMdSidenavToggler') id;

    constructor(private fuseMdSidenavService: FuseMdSidenavHelperService)
    {
    }

    @HostListener('click')
    onClick()
    {
        this.fuseMdSidenavService.getSidenav(this.id).toggle();
    }
}
