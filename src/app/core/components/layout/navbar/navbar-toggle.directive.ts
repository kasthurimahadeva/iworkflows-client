import {Directive, HostListener, Input} from '@angular/core';
import {NavbarService} from './navbar.service';
import {NavbarComponent} from './navbar.component';

@Directive({
    selector: '[fuseNavbar]',
})
export class NavbarToggleDirective
{
    @Input() fuseNavbar: string;
    navbar: NavbarComponent;

    constructor(navbar: NavbarService)
    {
        this.navbar = navbar.getNavBar();
    }

    @HostListener('click')
    onMouseEnter()
    {
        if ( !this.navbar[this.fuseNavbar] )
        {
            return;
        }
        this.navbar[this.fuseNavbar]();
    }
}
