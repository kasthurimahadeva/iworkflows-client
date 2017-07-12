import { Directive, Input, OnInit, HostListener, ElementRef } from '@angular/core';
import { MdSidenav } from '@angular/material';
import { FuseMdSidenavHelperService } from 'app/core/directives/md-sidenav-helper/md-sidenav-helper.service';

@Directive({
    selector: '[fuseMdSidenavHelper]'
})
export class FuseMdSidenavHelperDirective implements OnInit
{
    @Input('fuseMdSidenavHelper') mdSidenavInstance: MdSidenav;

    constructor(
        private fuseMdSidenavService: FuseMdSidenavHelperService,
        private elRef: ElementRef
    )
    {

    }

    ngOnInit()
    {
        this.fuseMdSidenavService.setSidenav(this.elRef.nativeElement.id, this.mdSidenavInstance);
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
