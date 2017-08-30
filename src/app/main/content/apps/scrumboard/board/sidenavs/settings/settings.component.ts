import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ScrumboardService } from '../../../scrumboard.service';

@Component({
    selector   : 'fuse-scrumboard-board-settings',
    templateUrl: './settings.component.html',
    styleUrls  : ['./settings.component.scss']
})
export class FuseScrumboardBoardSettingsSidenavComponent implements OnInit
{
    board: any;
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

    toggleCardCover()
    {
        this.board.settings.cardCoverImages = !this.board.settings.cardCoverImages;
        this.updateBoard();
    }

    toggleSubcription()
    {
        this.board.settings.subscribed = !this.board.settings.subscribed;
        this.updateBoard();
    }

    updateBoard()
    {
        this.scrumboardService.onBoardChanged.next(this.board);
        this.scrumboardService.updateBoard();
    }

}
