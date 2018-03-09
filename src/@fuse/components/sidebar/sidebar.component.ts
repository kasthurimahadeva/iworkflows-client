import { Component, ElementRef, HostBinding, HostListener, Inject, Input, OnDestroy, OnInit, Renderer2, ViewEncapsulation } from '@angular/core';
import { animate, AnimationBuilder, AnimationPlayer, style } from '@angular/animations';
import { ObservableMedia } from '@angular/flex-layout';
import { Subscription } from 'rxjs/Subscription';

import { FuseSidebarService } from './sidebar.service';
import { FuseMatchMediaService } from '@fuse/services/match-media.service';
import { DOCUMENT } from '@angular/common';

@Component({
    selector     : 'fuse-sidebar',
    templateUrl  : './sidebar.component.html',
    styleUrls    : ['./sidebar.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class FuseSidebarComponent implements OnInit, OnDestroy
{
    // Name
    @Input()
    name: string;

    // Align
    @Input()
    align: string;

    // Open
    @HostBinding('class.open')
    opened: boolean;

    // Locked Open
    @Input()
    lockedOpen: string;

    // isLockedOpen
    @HostBinding('class.locked-open')
    isLockedOpen: boolean;

    // Folded
    @HostBinding('class.folded')
    @Input()
    set folded(value)
    {
        this._folded = value;

        if ( value )
        {
            this.fold();
        }
        else
        {
            this.unfold();
        }
    }

    get folded()
    {
        return this._folded;
    }

    // Folded unfolded
    @HostBinding('class.unfolded')
    unfolded: boolean;

    // Private
    private _folded = false;
    private _wasActive: boolean;
    private _backdrop: HTMLElement | null = null;
    private _player: AnimationPlayer;
    private _matchMediaWatcher: Subscription;

    /**
     * Constructor
     *
     * @param renderer
     * @param elementRef
     * @param animationBuilder
     * @param sidebarService
     * @param matchMedia
     * @param media
     * @param document
     */
    constructor(
        private renderer: Renderer2,
        private elementRef: ElementRef,
        private animationBuilder: AnimationBuilder,
        private sidebarService: FuseSidebarService,
        private matchMedia: FuseMatchMediaService,
        private media: ObservableMedia,
        @Inject(DOCUMENT) private document: any
    )
    {
        // Set the defaults
        this.opened = false;
        this.folded = false;
        this.align = 'left';
    }

    /**
     * On init
     */
    ngOnInit(): void
    {
        // Register the sidebar
        this.sidebarService.register(this.name, this);

        // Setup alignment
        this._setupAlignment();

        // Setup lockedOpen
        this._setupLockedOpen();
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void
    {
        // Unregister the sidebar
        this.sidebarService.unregister(this.name);

        // Unregister the media watcher
        this._matchMediaWatcher.unsubscribe();
    }

    /**
     * Setup the alignment
     *
     * @private
     */
    private _setupAlignment(): void
    {
        if ( this.align === 'left' )
        {
            this.renderer.addClass(this.elementRef.nativeElement, 'left-aligned');
        }
        else
        {
            this.renderer.addClass(this.elementRef.nativeElement, 'right-aligned');
        }
    }

    /**
     * Setup the lockedOpen handler
     *
     * @private
     */
    private _setupLockedOpen(): void
    {
        // Return if the lockedOpen wasn't set
        if ( !this.lockedOpen )
        {
            return;
        }

        // Set the wasActive for the first time
        this._wasActive = false;

        // Act on every media change
        this._matchMediaWatcher =

            this.matchMedia.onMediaChange.subscribe(() => {

                // Get the active status
                const isActive = this.media.isActive(this.lockedOpen);

                // If the both status are the same, don't act
                if ( this._wasActive === isActive )
                {
                    return;
                }

                // Store the new active status
                this._wasActive = isActive;

                // Activate the lockedOpen
                if ( isActive )
                {
                    // Set the lockedOpen status
                    this.isLockedOpen = true;
                }
                // De-Activate the lockedOpen
                else
                {
                    // Set the lockedOpen status
                    this.isLockedOpen = false;

                    // Unfold the sidebar in case if it was folded
                    this.unfold();
                }
            });
    }

    /**
     * Open the sidebar
     */
    open(): void
    {
        if ( this.opened || this.isLockedOpen )
        {
            return;
        }

        // Show the backdrop
        this.showBackdrop();

        // Set the opened status
        this.opened = true;

        // Add a css class to the body
        this.renderer.addClass(this.document.body, 'fuse-sidebar-opened');
    }

    /**
     * Close the sidebar
     */
    close(): void
    {
        if ( !this.opened )
        {
            return;
        }

        // Hide the backdrop
        this.hideBackdrop();

        // Set the opened status
        this.opened = false;

        // Remove the css class from the body
        this.renderer.removeClass(this.document.body, 'fuse-sidebar-opened');
    }

    /**
     * Toggle open/close the sidebar
     */
    toggleOpen(): void
    {
        if ( this.opened )
        {
            this.close();
        }
        else
        {
            this.open();
        }
    }

    /**
     * Mouseenter
     */
    @HostListener('mouseenter')
    onMouseEnter(): void
    {
        // Only work if the sidebar is folded
        if ( !this.folded )
        {
            return;
        }

        // Unfold the sidebar temporarily
        this.unfolded = true;

        // Add a css class to the body
        this.renderer.addClass(this.document.body, 'fuse-sidebar-folded-unfolded');
    }

    /**
     * Mouseleave
     */
    @HostListener('mouseleave')
    onMouseLeave(): void
    {
        // Only work if the sidebar is folded
        if ( !this.folded )
        {
            return;
        }

        // Fold the sidebar back
        this.unfolded = false;

        // Remove the css class from the body
        this.renderer.removeClass(this.document.body, 'fuse-sidebar-folded-unfolded');
    }

    /**
     * Fold the sidebar permanently
     */
    fold(): void
    {
        // Add a css class to the body
        this.renderer.addClass(this.document.body, 'fuse-sidebar-folded');
    }

    /**
     * Unfold the sidebar permanently
     */
    unfold(): void
    {
        // Remove the css class from the body
        this.renderer.removeClass(this.document.body, 'fuse-sidebar-folded');
    }

    /**
     * Toggle the sidebar fold/unfold permanently
     */
    toggleFold(): void
    {
        this.folded = !this.folded;
    }

    /**
     * Show the backdrop
     */
    showBackdrop(): void
    {
        // Create the backdrop element
        this._backdrop = this.renderer.createElement('div');

        // Add a class to the backdrop element
        this._backdrop.classList.add('fuse-sidebar-overlay');

        // Append the backdrop to the parent of the sidebar
        this.renderer.appendChild(this.elementRef.nativeElement.parentElement, this._backdrop);

        // Create the enter animation and attach it to the player
        this._player =
            this.animationBuilder
                .build([
                    animate('300ms ease', style({opacity: 1}))
                ]).create(this._backdrop);

        // Play the animation
        this._player.play();

        // Add an event listener to the overlay
        this._backdrop.addEventListener('click', () => {
                this.close();
            }
        );
    }

    /**
     * Hide the backdrop
     */
    hideBackdrop(): void
    {
        if ( !this._backdrop )
        {
            return;
        }

        // Create the leave animation and attach it to the player
        this._player =
            this.animationBuilder
                .build([
                    animate('300ms ease', style({opacity: 0}))
                ]).create(this._backdrop);

        // Play the animation
        this._player.play();

        // Once the animation is done...
        this._player.onDone(() => {

            // If the backdrop still exists...
            if ( this._backdrop )
            {
                // Remove the backdrop
                this._backdrop.parentNode.removeChild(this._backdrop);
                this._backdrop = null;
            }
        });
    }
}
