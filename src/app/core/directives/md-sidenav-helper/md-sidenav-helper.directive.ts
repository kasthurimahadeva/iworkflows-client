import { Directive, Input, OnInit, HostListener, ElementRef, AfterViewInit, HostBinding } from '@angular/core';
import { MdSidenav } from '@angular/material';
import { FuseMdSidenavHelperService } from 'app/core/directives/md-sidenav-helper/md-sidenav-helper.service';
import { FuseMatchMedia } from '../../services/match-media.service';
import { MediaMonitor, ObservableMedia } from '@angular/flex-layout';

@Directive({
    selector: '[fuseMdSidenavHelper]'
})
export class FuseMdSidenavHelperDirective implements OnInit
{
    @Input('fuseMdSidenavHelper') mdSidenavInstance: MdSidenav;
    @Input('md-is-locked-open') mdIsLockedOpen: string;

    constructor(
        private fuseMdSidenavService: FuseMdSidenavHelperService,
        private elRef: ElementRef,
        private fuseMatchMedia: FuseMatchMedia,
        private observableMedia: ObservableMedia
    )
    {
    }

    ngOnInit()
    {
        this.fuseMdSidenavService.setSidenav(this.elRef.nativeElement.id, this.mdSidenavInstance);

        console.warn(this.mdIsLockedOpen);

        if ( this.observableMedia.isActive(this.mdIsLockedOpen) )
        {
            this.mdSidenavInstance.open();
            this.mdSidenavInstance.mode = 'side';
        }
        else
        {
            this.mdSidenavInstance.close();
            this.mdSidenavInstance.mode = 'over';
        }

        this.fuseMatchMedia.onMediaChange.subscribe((change) =>
        {
            console.log(this.observableMedia.isActive(this.mdIsLockedOpen));

            if ( this.observableMedia.isActive(this.mdIsLockedOpen) )
            {
                this.mdSidenavInstance.open();
                this.mdSidenavInstance.mode = 'side';
            }
            else
            {
                this.mdSidenavInstance.close();
                this.mdSidenavInstance.mode = 'over';
            }
        });

        console.warn(this.mdIsLockedOpen);

    }
}

@Directive({
    selector: '[fuseMdSidenavToggler]'
})
export class FuseMdSidenavTogglerDirective
{
    @Input('fuseMdSidenavToggler') id;
    instance: MdSidenav;

    constructor(private fuseMdSidenavService: FuseMdSidenavHelperService)
    {
    }

    @HostListener('click')
    onClick()
    {
        this.instance = this.fuseMdSidenavService.getSidenav(this.id);
        this.instance.toggle();
    }
}
