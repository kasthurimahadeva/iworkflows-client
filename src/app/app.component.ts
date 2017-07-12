import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
    selector   : 'body',
    templateUrl: './app.component.html',
    styleUrls  : ['./app.component.scss']
})
export class AppComponent implements OnInit
{
    constructor(
        private _renderer: Renderer2,
        private _elementRef: ElementRef
    )
    {
    }

    addClass(className: string)
    {
        this._renderer.addClass(this._elementRef.nativeElement, className);
    }

    removeClass(className: string)
    {
        this._renderer.removeClass(this._elementRef.nativeElement, className);
    }

    ngOnInit()
    {

    }
}
