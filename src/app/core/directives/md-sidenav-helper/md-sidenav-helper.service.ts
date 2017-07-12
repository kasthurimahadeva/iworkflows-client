import { Injectable } from '@angular/core';
import { MdSidenav } from '@angular/material';

@Injectable()
export class FuseMdSidenavHelperService
{
    sidenavInstances: MdSidenav[];

    constructor()
    {
        this.sidenavInstances = [];
    }

    setSidenav(id, instance)
    {
        this.sidenavInstances[id] = instance;
    }

    getSidenav(id)
    {
        return this.sidenavInstances[id];
    }
}
