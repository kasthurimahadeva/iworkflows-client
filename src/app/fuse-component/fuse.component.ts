import {Component, Directive, ElementRef, Input, OnInit, Output} from '@angular/core';

@Directive({
    selector: '[fuseDirective]'
})
export class FuseDirective
{
    @Input('fuseDirective') fuseDirective: string;

    constructor(private el: ElementRef)
    {
    }
}

@Component({
    selector: 'fuse-name-getter',
    template: `
        <h1>
            {{nameValue}}
            {{surname}}
        </h1>
    `
})
export class NameGetterComponent implements OnInit
{
    surname: string;
    @Input('nameValue') nameValue: string;

    constructor()
    {
        this.surname = 'HELVACI';
    }

    ngOnInit()
    {
        this.surname = 'Yemen';

    }
}

@Component({
    selector   : 'fuse-component',
    templateUrl: './fuse.component.html',
    styleUrls  : ['./fuse.component.scss']
})
export class FuseComponent implements OnInit
{
    name2: string;
    @Input('name') name: string;

    constructor()
    {
    }


    ngOnInit()
    {
        this.name2 = this.name;
        console.log(this.name);
        console.info('on init');
    }
}
