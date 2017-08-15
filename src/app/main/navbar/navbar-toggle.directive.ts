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

    constructor(private navbarService: FuseNavbarService)
    {
    }

    @HostListener('click')
    onClick()
    {
        this.navbar = this.navbarService.getNavBar();

        if ( !this.navbar[this.fuseNavbar] )
        {
            return;
        }

        this.navbar[this.fuseNavbar]();
    }
}
