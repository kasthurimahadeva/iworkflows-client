import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ScrumboardService } from '../scrumboard.service';
import { Subscription } from 'rxjs/Subscription';
import { FuseUtils } from '../../../../../core/fuseUtils';
import { Location } from '@angular/common';

@Component({
    selector   : 'fuse-scrumboard-board',
    templateUrl: './board.component.html',
    styleUrls  : ['./board.component.scss']
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
        const newList = {
            id     : FuseUtils.generateGUID(),
            name   : newListName,
            idCards: []
        };

        this.scrumboardService.addList(newList);
    }

    onBoardNameChanged(newName)
    {
        this.scrumboardService.updateBoard();
        this.location.go('/apps/scrumboard/boards/' + this.board.id + '/' + this.board.uri);
    }

    ngOnDestroy()
    {
        this.onBoardChanged.unsubscribe();
    }
}
