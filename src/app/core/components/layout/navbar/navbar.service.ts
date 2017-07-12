import {EventEmitter, Injectable} from '@angular/core';

@Injectable()
export class NavbarService
{
    navBarRef;

    constructor()
    {
    }

    setNavBar(ref)
    {
        this.navBarRef = ref;
    }

    getNavBar()
    {
        return this.navBarRef;
    }
}
