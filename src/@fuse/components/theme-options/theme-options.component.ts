import { Component, HostBinding, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { fuseAnimations } from '@fuse/animations';
import { FuseConfigService } from '@fuse/services/config.service';
import { FuseNavigationService } from '@fuse/components/navigation/navigation.service';
import { FuseSidebarService } from '@fuse/components/sidebar/sidebar.service';

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

    @HostBinding('class.bar-closed')
    barClosed: boolean;

    // Private
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {FormBuilder} _formBuilder
     * @param {FuseConfigService} _fuseConfigService
     * @param {FuseNavigationService} _fuseNavigationService
     * @param {FuseSidebarService} _fuseSidebarService
     * @param {Renderer2} _renderer
     */
    constructor(
        private _formBuilder: FormBuilder,
        private _fuseConfigService: FuseConfigService,
        private _fuseNavigationService: FuseNavigationService,
        private _fuseSidebarService: FuseSidebarService,
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
        this.fuseConfigForm.valueChanges
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((config) => {

                // Update the config
                this._fuseConfigService.config = config;
            });

        // Subscribe to the layout style value changes
        const layoutControls: any = this.fuseConfigForm.controls.layout;
        layoutControls.controls.style.valueChanges
                      .pipe(takeUntil(this._unsubscribeAll))
                      .subscribe((layout) => {

                          // Reset the config
                          this.resetConfig(layout);
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
                        this._toggleSidebarOpen('themeOptionsPanel');
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
    // @ Private methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Toggle sidebar open
     *
     * @param key
     * @private
     */
    private _toggleSidebarOpen(key): void
    {
        this._fuseSidebarService.getSidebar(key).toggleOpen();
    }


    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Reset the config correctly
     */
    resetConfig(layout): void
    {
        console.log(layout);

        // Check the layout style and reset the
        // configuration properly so we don't end
        // up with options that don't work with
        // selected layout style
        switch ( layout )
        {
            // Vertical

            // Layout 1
            case 'vertical-layout-1':
            {
                // Reset the config form
                this.fuseConfigForm.patchValue({
                    layout: {
                        navigation: {
                            folder: false
                        },
                        toolbar   : {
                            position: 'below'
                        }
                    }
                });

                break;
            }

            // Layout 2
            case 'vertical-layout-2':
            {
                console.log('resetting the options for vertical-layout-2...');

                // Reset the config form
                this.fuseConfigForm.patchValue({
                    layout: {
                        navigation: {
                            folder: false
                        },
                        toolbar   : {
                            position: 'below'
                        }
                    }
                });

                break;
            }

            // Layout 3
            case 'vertical-layout-3':
            {
                // Reset the config form
                this.fuseConfigForm.patchValue({
                    layout: {
                        navigation: {
                            folder: false
                        },
                        toolbar   : {
                            position: 'below'
                        }
                    }
                });

                break;
            }

            default :
            {
                break;
            }
        }
    }
}
