import { AfterViewInit, ContentChild, Directive, ElementRef, OnInit, ViewChild } from '@angular/core';

@Directive({
    selector: '[fuseWidgetToggle]'
})
export class FuseWidgetToggleDirective implements OnInit, AfterViewInit
{

    constructor(public el: ElementRef)
    {
    }

    ngOnInit()
    {
    }

    ngAfterViewInit()
    {
    }

}
