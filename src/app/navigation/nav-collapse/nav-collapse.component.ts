import {Component, HostBinding, HostListener, Input, OnInit} from '@angular/core';
import {NavigationService} from '../navigation.service';

@Component({
    selector   : 'fuse-nav-collapse',
    templateUrl: './nav-collapse.component.html',
    styleUrls  : ['./nav-collapse.component.scss'],
})
export class NavCollapseComponent implements OnInit
{
    @Input() item: any;
    @HostBinding('class') classes = 'nav-collapse nav-item';
    @HostBinding('class.open') public isOpen = false;

    constructor(private navigationService: NavigationService)
    {
        this.navigationService.navItemClicked.subscribe(
            (instance) =>
            {
                // console.warn('navItemClicked', instance);

                if ( !instance.includes(this.item.url) && this.isOpen )
                {
                    this.isOpen = !this.isOpen;
                }
                console.warn(this.item.url, instance);
                if ( instance.includes(this.item.url) && !this.isOpen )
                {
                    this.isOpen = !this.isOpen;
                }
            }
        );
    }

    toggleOpen(event)
    {
        event.preventDefault();
        this.isOpen = !this.isOpen;
        this.navigationService.navItemClicked.emit(this.item.url);
        console.log('toggleOpen');
    }


    ngOnInit()
    {
    }

}
