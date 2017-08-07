import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
    selector   : 'fuse-search-bar',
    templateUrl: './search-bar.component.html',
    styleUrls  : ['./search-bar.component.scss']
})
export class FuseSearchBarComponent implements OnInit
{
    collapsed: boolean;

    @Output() onInput: EventEmitter<any> = new EventEmitter();

    constructor()
    {
        this.collapsed = true;
    }

    ngOnInit()
    {

    }

    collapse()
    {
        this.collapsed = true;
    }

    expand()
    {
        this.collapsed = false;
    }

    search(event)
    {
        const value = event.target.value;

        this.onInput.emit(value);
    }

}
