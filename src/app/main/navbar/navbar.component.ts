import { Component, HostBinding, HostListener, Input, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { AppComponent } from '../../app.component';
import { Subscription } from 'rxjs/Subscription';
import { FuseMatchMedia } from '../../core/services/match-media.service';
import { FuseNavbarService } from './navbar.service';
import { ObservableMedia } from '@angular/flex-layout';

@Component({
    selector     : 'fuse-navbar',
    templateUrl  : './navbar.component.html',
    styleUrls    : ['./navbar.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class FuseNavbarComponent implements OnInit, OnDestroy
{
    @HostBinding('class.close') isClosed: boolean;
    @HostBinding('class.folded') isFoldedActive: boolean;
    @HostBinding('class.folded-open') isFoldedOpen: boolean;
    @HostBinding('class.initialized') initialized: boolean;
    @Input('folded') foldedByDefault = false;

    matchMediaWatcher: Subscription;

    constructor(
        private bodyEl: AppComponent,
        private fuseMatchMedia: FuseMatchMedia,
        private navBarService: FuseNavbarService,
        public media: ObservableMedia
    )
    {
        navBarService.setNavBar(this);

        this.matchMediaWatcher =
            this.fuseMatchMedia.onMediaChange
                .subscribe((mediaStep) => {
                    setTimeout(() => {

                        if ( mediaStep === 'xs' )
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

        if ( this.media.isActive('xs') )
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
        this.bodyEl.addClass('fuse-nav-bar-folded');
        this.isFoldedOpen = false;
    }

    deActivateFolded()
    {
        this.isFoldedActive = false;
        this.bodyEl.removeClass('fuse-nav-bar-folded');
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
            this.bodyEl.addClass('fuse-nav-bar-opened');
            this.bodyEl.removeClass('fuse-nav-bar-closed');
        }
        else
        {
            this.bodyEl.addClass('fuse-nav-bar-closed');
            this.bodyEl.removeClass('fuse-nav-bar-opened');
        }
    }

    ngOnDestroy()
    {
        this.matchMediaWatcher.unsubscribe();
    }
}
