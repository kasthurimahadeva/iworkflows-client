import { Component, ElementRef, HostBinding, OnInit } from '@angular/core';
import { style, animate, sequence, AnimationBuilder, AnimationPlayer } from '@angular/animations';
import { AppComponent } from '../../../app.component';

@Component({
    selector   : 'fuse-sidenav',
    templateUrl: './sidenav.component.html',
    styleUrls  : ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit
{
    constructor(private elementRef: ElementRef,
                private animationBuilder: AnimationBuilder,
                private bodyEl: AppComponent)
    {

    }

    closeBar()
    {
        this.animationBuilder
            .build([
                style({transform: 'translate3d(0,0,0)'}),
                animate('400ms ease', style({transform: 'translate3d(100%,0,0)'}))
            ])
            .create(this.elementRef.nativeElement)
            .play();
    }

    openBar()
    {
        this.animationBuilder
            .build([
                style({transform: 'translate3d(100%,0,0)'}),
                animate('400ms ease', style({transform: 'translate3d(0,0,0)'}))
            ])
            .create(this.elementRef.nativeElement)
            .play();
    }

    ngOnInit()
    {
    }

}
