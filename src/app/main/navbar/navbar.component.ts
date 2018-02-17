import { Component, Input, ViewEncapsulation } from '@angular/core';

import { FuseSidebarService } from '@fuse/components/sidebar/sidebar.service';

@Component({
    selector     : 'fuse-navbar',
    templateUrl  : './navbar.component.html',
    styleUrls    : ['./navbar.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class FuseNavbarComponent
{
    @Input() layout;

    constructor(private sidebarService: FuseSidebarService)
    {
        // Default layout
        this.layout = 'vertical';
    }

    toggleSidebarOpened(key)
    {
        this.sidebarService.getSidebar(key).toggleOpen();
    }

    toggleSidebarFolded(key)
    {
        this.sidebarService.getSidebar(key).toggleFold();
    }
}
