import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatColors } from '../../../../../../../../core/matColors';
import { ScrumboardService } from '../../../../scrumboard.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector   : 'fuse-scrumboard-board-color-selector',
    templateUrl: './board-color-selector.component.html',
    styleUrls  : ['./board-color-selector.component.scss']
})
export class FuseScrumboardBoardColorSelectorComponent implements OnInit, OnDestroy
{
    colors: any;
    board: any;
    onBoardChanged: Subscription;

    constructor(
        private scrumboardService: ScrumboardService
    )
    {
        this.colors = MatColors.all;
    }

    ngOnInit()
    {
        this.onBoardChanged =
            this.scrumboardService.onBoardChanged
                .subscribe(board => {
                    this.board = board;
                });
    }

    setColor(color)
    {
        this.board.settings.color = color;
        this.scrumboardService.updateBoard();
    }

    ngOnDestroy()
    {
        this.onBoardChanged.unsubscribe();
    }
}
