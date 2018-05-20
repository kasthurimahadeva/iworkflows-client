import { Component, ElementRef, HostBinding, Input, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
import { style, animate, AnimationBuilder, AnimationPlayer } from '@angular/animations';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { fuseAnimations } from '@fuse/animations';
import { FuseConfigService } from '@fuse/services/config.service';
import { FuseNavigationService } from '@fuse/components/navigation/navigation.service';

@Component({
    selector   : 'fuse-theme-options',
    templateUrl: './theme-options.component.html',
    styleUrls  : ['./theme-options.component.scss'],
    animations : fuseAnimations
})
export class FuseThemeOptionsComponent implements OnInit, OnDestroy
{
    @Input()
    navigation;

    @ViewChild('openButton')
    openButton;

    @ViewChild('panel')
    panel;

    @ViewChild('overlay')
    overlay: ElementRef;

    player: AnimationPlayer;
    fuseConfig: any;

    @HostBinding('class.bar-closed') barClosed: boolean;

    // Private
    private _unsubscribeAll: Subject<any>;

    constructor(
        private _animationBuilder: AnimationBuilder,
        private _fuseConfigService: FuseConfigService,
        private _fuseNavigationService: FuseNavigationService,
        private _renderer: Renderer2
    )
    {
        // Set the defaults
        this.barClosed = true;

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
        // Subscribe to the config changes
        this._fuseConfigService.config
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((config) => {
                    this.fuseConfig = config;
                }
            );

        // Listen for the overlay's click event
        this._renderer.listen(this.overlay.nativeElement, 'click', () => {
            this.closeBar();
        });

        // Get the nav model and add customize nav item
        // that opens the bar programmatically
        const nav: any = this.navigation;

        nav.push({
            'id'      : 'custom-function',
            'title'   : 'Custom Function',
            'type'    : 'group',
            'children': [
                {
                    'id'      : 'customize',
                    'title'   : 'Customize',
                    'type'    : 'item',
                    'icon'    : 'settings',
                    'function': () => {
                        this.openBar();
                    }
                }
            ]
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

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * On config change
     */
    onConfigChange(): void
    {
        this._fuseConfigService.config = this.fuseConfig;
    }

    /**
     * Open the bar
     */
    openBar(): void
    {
        this.barClosed = false;

        this.player =
            this._animationBuilder
                .build([
                    style({transform: 'translate3d(100%,0,0)'}),
                    animate('400ms ease', style({transform: 'translate3d(0,0,0)'}))
                ]).create(this.panel.nativeElement);

        this.player.play();
    }

    /**
     * Close the bar
     */
    closeBar(): void
    {
        this.player =
            this._animationBuilder
                .build([
                    style({transform: 'translate3d(0,0,0)'}),
                    animate('400ms ease', style({transform: 'translate3d(100%,0,0)'}))
                ]).create(this.panel.nativeElement);

        this.player.play();

        this.player.onDone(() => {
            this.barClosed = true;
        });
    }
}
