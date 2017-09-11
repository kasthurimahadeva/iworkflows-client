import { Component, HostBinding, HostListener, Input, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { FuseMatchMedia } from '../../../core/services/match-media.service';
import { FuseNavbarVerticalService } from './navbar-vertical.service';
import { ObservableMedia } from '@angular/flex-layout';
import { FuseMainComponent } from '../../main.component';
import { NavigationEnd, Router } from '@angular/router';
import { PerfectScrollbarDirective } from 'ngx-perfect-scrollbar';
import { FuseNavigationService } from '../../../core/components/navigation/navigation.service';

@Component({
    selector     : 'fuse-navbar-vertical',
    templateUrl  : './navbar-vertical.component.html',
    styleUrls    : ['./navbar-vertical.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class FuseNavbarVerticalComponent implements OnInit, OnDestroy
{
    @HostBinding('class.close') isClosed: boolean;
    @HostBinding('class.folded') isFoldedActive: boolean;
    @HostBinding('class.folded-open') isFoldedOpen: boolean;
    @HostBinding('class.initialized') initialized: boolean;
    @Input('folded') foldedByDefault = false;
    @ViewChild(PerfectScrollbarDirective) perfectScrollbarDirective;

    matchMediaWatcher: Subscription;

    constructor(
        private fuseMainComponentEl: FuseMainComponent,
        private fuseMatchMedia: FuseMatchMedia,
        private fuseNavigationService: FuseNavigationService,
        private navBarService: FuseNavbarVerticalService,
        public media: ObservableMedia,
        private router: Router
    )
    {
        navBarService.setNavBar(this);

        this.fuseNavigationService.onNavCollapseToggled.subscribe(() => {

            setTimeout(() => {
                this.perfectScrollbarDirective.update();
            }, 310);
        });

        this.matchMediaWatcher =
            this.fuseMatchMedia.onMediaChange
                .subscribe((mediaStep) => {
                    setTimeout(() => {

                        if ( this.media.isActive('lt-lg') )
                        {
                            this.closeBar();
                            this.deActivateFolded();
                        }
                        else
                        {
                            this.openBar();
                        }
                    });
                });

        router.events.subscribe(
            (event) => {
                if ( event instanceof NavigationEnd )
                {
                    if ( this.media.isActive('lt-lg') )
                    {
                        setTimeout(() => {
                            this.closeBar();
                        });
                    }
                }
            }
        );
    }

    ngOnInit()
    {
        this.isClosed = false;
        this.isFoldedActive = this.foldedByDefault;
        this.isFoldedOpen = false;
        this.initialized = false;
        this.updateCssClasses();

        setTimeout(() => {
            this.initialized = true;
        });

        if ( this.media.isActive('lt-lg') )
        {
            this.closeBar();
            this.deActivateFolded();
        }
        else
        {
            if ( !this.foldedByDefault )
            {
                this.deActivateFolded();
            }
            else
            {
                this.activateFolded();
            }
        }
    }

    openBar()
    {
        this.isClosed = false;
        this.updateCssClasses();
    }

    closeBar()
    {
        this.isClosed = true;
        this.updateCssClasses();
    }

    toggleBar()
    {
        if ( this.isClosed )
        {
            this.openBar();
        }
        else
        {
            this.closeBar();
        }
    }

    toggleFold()
    {
        if ( !this.isFoldedActive )
        {
            this.activateFolded();
        }
        else
        {
            this.deActivateFolded();
        }
    }

    activateFolded()
    {
        this.isFoldedActive = true;
        this.fuseMainComponentEl.addClass('fuse-nav-bar-folded');
        this.isFoldedOpen = false;
    }

    deActivateFolded()
    {
        this.isFoldedActive = false;
        this.fuseMainComponentEl.removeClass('fuse-nav-bar-folded');
        this.isFoldedOpen = false;
    }

    @HostListener('mouseenter')
    onMouseEnter()
    {
        this.isFoldedOpen = true;
    }

    @HostListener('mouseleave')
    onMouseLeave()
    {
        this.isFoldedOpen = false;
    }

    updateCssClasses()
    {
        if ( this.isClosed )
        {
            this.fuseMainComponentEl.addClass('fuse-nav-bar-opened');
            this.fuseMainComponentEl.removeClass('fuse-nav-bar-closed');
        }
        else
        {
            this.fuseMainComponentEl.addClass('fuse-nav-bar-closed');
            this.fuseMainComponentEl.removeClass('fuse-nav-bar-opened');
        }
    }

    ngOnDestroy()
    {
        this.matchMediaWatcher.unsubscribe();
    }
}
