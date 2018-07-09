import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
    selector     : 'navbar',
    templateUrl  : './navbar.component.html',
    styleUrls    : ['./navbar.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class NavbarComponent
{
    // Variant
    @Input()
    variant;

    /**
     * Constructor
     */
    constructor()
    {
        // Set the defaults
        this.variant = 'vertical-style-1';
    }
}
