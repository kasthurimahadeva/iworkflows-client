import { Component, OnDestroy, OnInit } from '@angular/core';
import { ScrumboardService } from './scrumboard.service';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';
import { Board } from './board.model';
import { fuseAnimations } from '../../../../core/animations';

@Component({
    selector   : 'fuse-scrumboard',
    templateUrl: './scrumboard.component.html',
    styleUrls  : ['./scrumboard.component.scss'],
    animations : fuseAnimations
})
export class FuseScrumboardComponent implements OnInit, OnDestroy
{
    boards: any[];
    onBoardsChanged: Subscription;

    constructor(
        private  router: Router,
        private scrumboardService: ScrumboardService
    )
    {

    }

    ngOnInit()
    {
        this.onBoardsChanged =
            this.scrumboardService.onBoardsChanged
                .subscribe(boards => {
                    this.boards = boards;
                });

    }

    newBoard()
    {
        const newBoard = new Board({});
        this.scrumboardService.createNewBoard(newBoard).then(() => {
            this.router.navigate(['/apps/scrumboard/boards/' + newBoard.id + '/' + newBoard.uri]);
        });
    }

    ngOnDestroy()
    {
        this.onBoardsChanged.unsubscribe();
    }
}
