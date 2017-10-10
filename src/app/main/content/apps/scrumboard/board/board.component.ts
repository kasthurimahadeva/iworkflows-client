import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ScrumboardService } from '../scrumboard.service';
import { Subscription } from 'rxjs/Subscription';
import { Location } from '@angular/common';
import { List } from '../list.model';
import { fuseAnimations } from '../../../../../core/animations';

@Component({
    selector   : 'fuse-scrumboard-board',
    templateUrl: './board.component.html',
    styleUrls  : ['./board.component.scss'],
    animations : fuseAnimations
})
export class FuseScrumboardBoardComponent implements OnInit, OnDestroy
{
    board: any;
    onBoardChanged: Subscription;

    constructor(
        private route: ActivatedRoute,
        private location: Location,
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

    onListAdd(newListName)
    {
        if ( newListName === '' )
        {
            return;
        }

        this.scrumboardService.addList(new List({name: newListName}));
    }

    onBoardNameChanged(newName)
    {
        this.scrumboardService.updateBoard();
        this.location.go('/apps/scrumboard/boards/' + this.board.id + '/' + this.board.uri);
    }

    onDrop(ev)
    {
        this.scrumboardService.updateBoard();
    }

    ngOnDestroy()
    {
        this.onBoardChanged.unsubscribe();
    }
}
