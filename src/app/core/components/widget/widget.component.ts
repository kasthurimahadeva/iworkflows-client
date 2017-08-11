import { AfterContentInit, Component, ContentChildren, ElementRef, HostBinding, OnInit, QueryList, Renderer2, ViewEncapsulation } from '@angular/core';
import { FuseWidgetToggleDirective } from './widget-toggle.directive';

@Component({
    selector     : 'fuse-widget',
    templateUrl  : './widget.component.html',
    styleUrls    : ['./widget.component.scss'],
    encapsulation: ViewEncapsulation.None
})

export class FuseWidgetComponent implements OnInit, AfterContentInit
{
    @HostBinding('class.flipped') flipped = false;

    constructor(private el: ElementRef, private renderer: Renderer2)
    {
    }

    ngOnInit()
    {

    }

    ngAfterContentInit()
    {
        setTimeout(() => {

            const flipButtons = this.el.nativeElement.querySelectorAll('.fuse-widget-flip-button');

            flipButtons.forEach(flipButton => {
                this.renderer.listen(flipButton, 'click', () => {
                    this.toggle();
                });
            });
        });
    }

    toggle()
    {
        this.flipped = !this.flipped;
    }

}
