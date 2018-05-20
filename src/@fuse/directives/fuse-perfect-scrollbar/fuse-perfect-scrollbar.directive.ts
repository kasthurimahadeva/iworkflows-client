import { AfterViewInit, Directive, ElementRef, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Platform } from '@angular/cdk/platform';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import PerfectScrollbar from 'perfect-scrollbar';

import { FuseConfigService } from '@fuse/services/config.service';

@Directive({
    selector: '[fusePerfectScrollbar]'
})
export class FusePerfectScrollbarDirective implements OnInit, AfterViewInit, OnDestroy
{
    isDisableCustomScrollbars = false;
    isMobile = false;
    isInitialized = true;
    ps: PerfectScrollbar;

    // Private
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {ElementRef} elementRef
     * @param {FuseConfigService} _fuseConfigService
     * @param {Platform} _platform
     */
    constructor(
        public elementRef: ElementRef,
        private _fuseConfigService: FuseConfigService,
        private _platform: Platform
    )
    {
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
        this._fuseConfigService.config
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(
                (settings) => {
                    this.isDisableCustomScrollbars = !settings.customScrollbars;
                }
            );

        if ( this._platform.ANDROID || this._platform.IOS )
        {
            this.isMobile = true;
        }
    }

    /**
     * After view init
     */
    ngAfterViewInit(): void
    {
        if ( this.isMobile || this.isDisableCustomScrollbars )
        {
            this.isInitialized = false;
            return;
        }

        // Initialize the perfect-scrollbar
        this.ps = new PerfectScrollbar(this.elementRef.nativeElement, {
            wheelPropagation: true
        });
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void
    {
        if ( !this.isInitialized || !this.ps )
        {
            return;
        }

        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();

        // Destroy the perfect-scrollbar
        this.ps.destroy();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Document click
     *
     * @param {Event} event
     */
    @HostListener('document:click', ['$event'])
    documentClick(event: Event): void
    {
        if ( !this.isInitialized || !this.ps )
        {
            return;
        }

        // Update the scrollbar on document click..
        // This isn't the most elegant solution but there is no other way
        // of knowing when the contents of the scrollable container changes.
        // Therefore, we update scrollbars on every document click.
        this.ps.update();
    }

    /**
     * Update the scrollbar
     */
    update(): void
    {
        if ( !this.isInitialized )
        {
            return;
        }

        // Update the perfect-scrollbar
        this.ps.update();
    }

    /**
     * Destroy the scrollbar
     */
    destroy(): void
    {
        this.ngOnDestroy();
    }

    /**
     * Scroll to X
     *
     * @param {number} x
     * @param {number} speed
     */
    scrollToX(x: number, speed?: number): void
    {
        this.animateScrolling('scrollLeft', x, speed);
    }

    /**
     * Scroll to Y
     *
     * @param {number} y
     * @param {number} speed
     */
    scrollToY(y: number, speed?: number): void
    {
        this.animateScrolling('scrollTop', y, speed);
    }

    /**
     * Scroll to top
     *
     * @param {number} offset
     * @param {number} speed
     */
    scrollToTop(offset?: number, speed?: number): void
    {
        this.animateScrolling('scrollTop', (offset || 0), speed);
    }

    /**
     * Scroll to left
     *
     * @param {number} offset
     * @param {number} speed
     */
    scrollToLeft(offset?: number, speed?: number): void
    {
        this.animateScrolling('scrollLeft', (offset || 0), speed);
    }

    /**
     * Scroll to right
     *
     * @param {number} offset
     * @param {number} speed
     */
    scrollToRight(offset?: number, speed?: number): void
    {
        const width = this.elementRef.nativeElement.scrollWidth;

        this.animateScrolling('scrollLeft', width - (offset || 0), speed);
    }

    /**
     * Scroll to bottom
     *
     * @param {number} offset
     * @param {number} speed
     */
    scrollToBottom(offset?: number, speed?: number): void
    {
        const height = this.elementRef.nativeElement.scrollHeight;

        this.animateScrolling('scrollTop', height - (offset || 0), speed);
    }

    /**
     * Animate scrolling
     *
     * @param {string} target
     * @param {number} value
     * @param {number} speed
     */
    animateScrolling(target: string, value: number, speed?: number): void
    {
        if ( !speed )
        {
            this.elementRef.nativeElement[target] = value;

            // PS has weird event sending order, this is a workaround for that
            this.update();
            this.update();
        }
        else if ( value !== this.elementRef.nativeElement[target] )
        {
            let newValue = 0;
            let scrollCount = 0;

            let oldTimestamp = performance.now();
            let oldValue = this.elementRef.nativeElement[target];

            const cosParameter = (oldValue - value) / 2;

            const step = (newTimestamp) => {
                scrollCount += Math.PI / (speed / (newTimestamp - oldTimestamp));

                newValue = Math.round(value + cosParameter + cosParameter * Math.cos(scrollCount));

                // Only continue animation if scroll position has not changed
                if ( this.elementRef.nativeElement[target] === oldValue )
                {
                    if ( scrollCount >= Math.PI )
                    {
                        this.elementRef.nativeElement[target] = value;

                        // PS has weird event sending order, this is a workaround for that
                        this.update();

                        this.update();
                    }
                    else
                    {
                        this.elementRef.nativeElement[target] = oldValue = newValue;

                        oldTimestamp = newTimestamp;

                        window.requestAnimationFrame(step);
                    }
                }
            };

            window.requestAnimationFrame(step);
        }
    }
}
