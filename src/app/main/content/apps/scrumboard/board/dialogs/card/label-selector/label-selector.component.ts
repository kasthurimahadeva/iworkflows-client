import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ScrumboardService } from '../../../../scrumboard.service';
import { FuseUtils } from '../../../../../../../../core/fuseUtils';
import { fuseAnimations } from '../../../../../../../../core/animations';

@Component({
    selector     : 'fuse-scrumboard-label-selector',
    templateUrl  : './label-selector.component.html',
    styleUrls    : ['./label-selector.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})

export class FuseScrumboardLabelSelectorComponent implements OnInit, OnDestroy
{
    board: any;
    @Input('card') card: any;
    @Output() onCardLabelsChange = new EventEmitter();

    labelsMenuView = 'labels';
    selectedLabel: any;
    newLabel = {
        'id'   : '',
        'name' : '',
        'color': 'mat-blue-400-bg'
    };
    toggleInArray = FuseUtils.toggleInArray;

    onBoardChanged: Subscription;

    constructor(
        private scrumboardService: ScrumboardService
    )
    {
    }

    ngOnInit()
    {
        this.onBoardChanged =
            this.scrumboardService.onBoardChanged
                .subscribe(board => {
                    this.board = board;
                });
    }

    cardLabelsChanged()
    {
        this.onCardLabelsChange.next();
    }

    onLabelChange()
    {
        this.scrumboardService.updateBoard();
    }

    addNewLabel()
    {
        this.newLabel.id = FuseUtils.generateGUID();
        this.board.labels.push(Object.assign({}, this.newLabel));
        this.newLabel.name = '';
        this.labelsMenuView = 'labels';
    }

    ngOnDestroy()
    {
        this.onBoardChanged.unsubscribe();
    }

}
