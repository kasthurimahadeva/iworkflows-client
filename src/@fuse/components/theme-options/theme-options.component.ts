import { Component, ElementRef, HostBinding, Input, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
import { style, animate, AnimationBuilder, AnimationPlayer } from '@angular/animations';
import { FormBuilder, FormGroup } from '@angular/forms';
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
    fuseConfig: any;
    fuseConfigForm: FormGroup;
    player: AnimationPlayer;

    @ViewChild('openButton')
    openButton;

    @ViewChild('panel')
    panel;

    @ViewChild('overlay')
    overlay: ElementRef;

    @HostBinding('class.bar-closed')
    barClosed: boolean;

    // Private
    private _unsubscribeAll: Subject<any>;

    constructor(
        private _animationBuilder: AnimationBuilder,
        private _formBuilder: FormBuilder,
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

        // Build the config form
        // noinspection TypeScriptValidateTypes
        this.fuseConfigForm = this._formBuilder.group({
            layout          : this._formBuilder.group({
                style     : this.fuseConfig.layout.style,
                navigation: this._formBuilder.group({
                    position  : this.fuseConfig.layout.navigation.position,
                    folded    : this.fuseConfig.layout.navigation.folded,
                    background: this.fuseConfig.layout.navigation.background
                }),
                toolbar   : this._formBuilder.group({
                    position  : this.fuseConfig.layout.toolbar.position,
                    background: this.fuseConfig.layout.toolbar.background
                }),
                footer    : this._formBuilder.group({
                    position  : this.fuseConfig.layout.footer.position,
                    background: this.fuseConfig.layout.footer.background
                }),
                mode      : this.fuseConfig.layout.mode
            }),
            customScrollbars: this.fuseConfig.customScrollbars,
            routerAnimation : this.fuseConfig.routerAnimation
        });

        // Subscribe to the form value changes
        this.fuseConfigForm.valueChanges.subscribe((config) => {

            // Update the config
            this._fuseConfigService.config = config;
        });

        // Listen for the overlay's click event
        this._renderer.listen(this.overlay.nativeElement, 'click', () => {
            this.closeBar();
        });

        // Add customize nav item that opens the bar programmatically
        const customFunctionNavItem = {
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
        };

        this._fuseNavigationService.addNavigationItem(customFunctionNavItem, 'end');
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void
    {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();

        // Remove the custom function menu
        this._fuseNavigationService.removeNavigationItem('custom-function');
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * On config change
     */
    onConfigChange(layoutChanged = false): void
    {
        this._fuseConfigService.config = this.fuseConfig;

        // If the layout changed, reset the settings
        if ( layoutChanged )
        {
            this.resetConfig();
        }
    }

    /**
     * Reset the config correctly
     */
    resetConfig(): void
    {
        // Check the layout style and reset the
        // configuration properly so we don't end
        // up with options that don't work with
        // selected layout style
        switch ( this.fuseConfig.layout.style )
        {
            // Vertical

            // Layout 1
            case 'vertical-layout-1':
            {
                this._fuseConfigService.config = {
                    layout: {
                        style     : 'vertical-layout-1',
                        navigation: {
                            position: 'left'
                        }
                    }
                };

                break;
            }

            default :
            {
                break;
            }
        }
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
