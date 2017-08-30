import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FuseUtils } from '../../../../../../core/fuseUtils';
import { ScrumboardService } from 'app/main/content/apps/scrumboard/scrumboard.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { PerfectScrollbarDirective } from 'ngx-perfect-scrollbar';
import { MdDialog } from '@angular/material';
import { FuseScrumboardCardDialogComponent } from '../dialogs/card/card.component';

@Component({
    selector   : 'fuse-scrumboard-board-list',
    templateUrl: './list.component.html',
    styleUrls  : ['./list.component.scss']
})
export class FuseScrumboardBoardListComponent implements OnInit, OnDestroy
{
    board: any;
    dialogRef: any;

    @Input() list;
    @ViewChild(PerfectScrollbarDirective) listScroll: PerfectScrollbarDirective;

    onBoardChanged: Subscription;

    constructor(
        private route: ActivatedRoute,
        private scrumboardService: ScrumboardService,
        public dialog: MdDialog
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

    onListNameChanged(newListName)
    {
        this.list.name = newListName;
    }

    onCardAdd(newCardName)
    {
        if ( newCardName === '' )
        {
            return;
        }

        const newCard = {
            id               : FuseUtils.generateGUID(),
            name             : newCardName,
            description      : '',
            idAttachmentCover: '',
            idMembers        : [],
            idLabels         : [],
            attachments      : [],
            subscribed       : false,
            checklists       : [],
            checkItems       : 0,
            checkItemsChecked: 0,
            comments         : [],
            activities       : [],
            due              : null
        };

        this.scrumboardService.addCard(this.list.id, newCard);

        setTimeout(() => {
            this.listScroll.scrollToBottom(0, 400);
        });

    }

    removeList(listId)
    {
        this.scrumboardService.removeList(listId);
    }

    openCardDialog(cardId)
    {
        this.dialogRef = this.dialog.open(FuseScrumboardCardDialogComponent, {
            panelClass: 'scrumboard-card-dialog',
            data      : {
                cardId: cardId,
                listId: this.list.id
            }
        });
        this.dialogRef.afterClosed()
            .subscribe(response => {

            });
    }

    ngOnDestroy()
    {
        this.onBoardChanged.unsubscribe();
    }
}
