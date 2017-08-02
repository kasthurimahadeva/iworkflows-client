import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PerfectScrollbarDirective } from 'ngx-perfect-scrollbar';
import { NavigationEnd, Router } from '@angular/router';

@Component({
    selector     : 'fuse-content',
    templateUrl  : './content.component.html',
    styleUrls    : ['./content.component.scss']
})
export class FuseContentComponent implements OnInit
{
    constructor(
        private router: Router,
        private perfectScrollbarDirective: PerfectScrollbarDirective
    )
    {

    }

    ngOnInit()
    {
        this.router.events.subscribe((event) =>
            {
                if ( event instanceof NavigationEnd )
                {
                    setTimeout(() =>
                    {
                        this.perfectScrollbarDirective.scrollToTop();
                    }, 0);
                }
            }
        );
    }
}
