import { Component, HostBinding, HostListener, OnDestroy, OnInit } from '@angular/core';
import { AppComponent } from '../../../../app.component';
import { Subscription } from 'rxjs/Subscription';
import { FuseMatchMedia } from '../../../services/match-media.service';
import { NavbarService } from './navbar.service';

@Component({
    selector   : 'fuse-navbar',
    templateUrl: './navbar.component.html',
    styleUrls  : ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy
{
    @HostBinding('class.close') isClosed: boolean;
    @HostBinding('class.open') isOpened: boolean = !this.isClosed;

    @HostBinding('class.folded') isFoldedActive: boolean;
    @HostBinding('class.folded-open') isFoldedOpen: boolean;

    matchMediaWatcher: Subscription;

    constructor(
        private bodyEl: AppComponent,
        private fuseMatchMedia: FuseMatchMedia,
        private navBarService: NavbarService
    )
    {
        navBarService.setNavBar(this);
        this.isClosed = false;
        this.isFoldedActive = false;
        this.isFoldedOpen = false;
        this.updateCssClasses();

        this.matchMediaWatcher = this.fuseMatchMedia.onMediaChange.subscribe((mediaStep) =>
        {
            if ( mediaStep === 'xs' )
            {
                this.closeBar();
            }
            else
            {
                this.openBar();
            }
        });
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
            this.isFoldedActive = true;
            this.bodyEl.addClass('fuse-nav-bar-folded');
        }
        else
        {
            this.isFoldedActive = false;
            this.bodyEl.removeClass('fuse-nav-bar-folded');
        }
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

    ngOnInit()
    {

    }

    ngOnDestroy()
    {
        this.matchMediaWatcher.unsubscribe();
    }
}
