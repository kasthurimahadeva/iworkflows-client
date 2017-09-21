import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { fuseAnimations } from '../../../../core/animations';

@Component({
    selector     : 'fuse-profile',
    templateUrl  : './profile.component.html',
    styleUrls    : ['./profile.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class FuseProfileComponent implements OnInit
{

    constructor()
    {

    }

    ngOnInit()
    {

    }
}
