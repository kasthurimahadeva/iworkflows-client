import { Component, ElementRef, OnDestroy, OnInit, Renderer2, ViewEncapsulation } from '@angular/core';
import { FuseLayoutService } from '../core/services/layout.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector     : 'fuse-main',
    templateUrl  : './main.component.html',
    styleUrls    : ['./main.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class FuseMainComponent implements OnInit, OnDestroy
{
    onSettingsChanged: Subscription;
    layoutSettings: { navigation: string, toolbar: string, footer: string };

    constructor(
        private layoutService: FuseLayoutService,
        private _renderer: Renderer2,
        private _elementRef: ElementRef
    )
    {
        this.onSettingsChanged =
            this.layoutService.onSettingsChanged
                .subscribe(
                    (newSettings) => {
                        this.layoutSettings = newSettings;
                    }
                );
    }

    ngOnInit()
    {
    }

    ngOnDestroy()
    {
        this.onSettingsChanged.unsubscribe();
    }

    addClass(className: string)
    {
        this._renderer.addClass(this._elementRef.nativeElement, className);
    }

    removeClass(className: string)
    {
        this._renderer.removeClass(this._elementRef.nativeElement, className);
    }
}
