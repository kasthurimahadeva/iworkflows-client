import { Directive, HostListener, Input } from '@angular/core';
import { FuseNavbarService } from './navbar.service';
import { FuseNavbarComponent } from './navbar.component';

@Directive({
    selector: '[fuseNavbar]'
})
export class FuseNavbarToggleDirective
{
    @Input() fuseNavbar: string;
    navbar: FuseNavbarComponent;

    constructor(navbar: FuseNavbarService)
    {
        this.navbar = navbar.getNavBar();
    }

    @HostListener('click')
    onClick()
    {
        if ( !this.navbar[this.fuseNavbar] )
        {
            return;
        }
        this.navbar[this.fuseNavbar]();
    }
}
