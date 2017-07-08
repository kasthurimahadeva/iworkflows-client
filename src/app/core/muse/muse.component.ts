import {Component, ElementRef, HostBinding, Input, OnInit, Renderer2, ViewChild} from '@angular/core';
import {MuseItem} from './muse-item.model';

@Component({
    selector   : 'fuse-muse',
    templateUrl: './muse.component.html',
    styleUrls  : ['./muse.component.scss']
})
export class MuseComponent implements OnInit
{
    items: MuseItem[] = [];
    elRef: ElementRef;
    private renderer: Renderer2;
    @ViewChild('museInput') museInput: ElementRef;
    @Input() nameChanged;
    @Input() @HostBinding('style.backgroundColor') bgColor: string;


    /* @Input() set bgColor(bgValue)
     {
     //this.elRef.nativeElement.style.backgroundColor = bgValue;
     // this.museInput.nativeElement.style.backgroundColor = bgValue;
     //this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', bgValue);
     };
     */
    constructor(elRef: ElementRef, renderer: Renderer2)
    {
        this.elRef = elRef;
        this.renderer = renderer;
    }

    onNameChange()
    {
    }

    ngOnInit()
    {
        console.warn(this.museInput.nativeElement.value);
        const sercanItem = new MuseItem('sercan');
        this.items.push(sercanItem);
        sercanItem.save();

    }

}
