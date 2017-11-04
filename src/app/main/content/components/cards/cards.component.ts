import { Component } from '@angular/core';
import { fuseAnimations } from '../../../../core/animations';

@Component({
    selector   : 'fuse-cards-docs',
    templateUrl: './cards.component.html',
    styleUrls  : ['./cards.component.scss'],
    animations : fuseAnimations
})
export class FuseCardsDocsComponent
{
    card9Expanded = false;
    card10Expanded = false;

    constructor()
    {

    }
}
