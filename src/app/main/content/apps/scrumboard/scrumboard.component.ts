import { Component, OnDestroy, OnInit } from '@angular/core';
import { ScrumboardService } from './scrumboard.service';
import { Subscription } from 'rxjs/Subscription';
import { FuseUtils } from '../../../../core/fuseUtils';
import { Router } from '@angular/router';

@Component({
    selector   : 'fuse-scrumboard',
    templateUrl: './scrumboard.component.html',
    styleUrls  : ['./scrumboard.component.scss']
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
        const newBoard = {
            name    : 'Untitled Board',
            uri     : 'untitled-board',
            id      : FuseUtils.generateGUID(),
            settings: {
                color          : '',
                subscribed     : true,
                cardCoverImages: true
            },
            lists   : [],
            cards   : [],
            members : [
                {
                    id    : '56027c1930450d8bf7b10758',
                    name  : 'Alice Freeman',
                    avatar: 'assets/images/avatars/alice.jpg'
                },
                {
                    id    : '26027s1930450d8bf7b10828',
                    name  : 'Danielle Obrien',
                    avatar: 'assets/images/avatars/danielle.jpg'
                },
                {
                    id    : '76027g1930450d8bf7b10958',
                    name  : 'James Lewis',
                    avatar: 'assets/images/avatars/james.jpg'
                },
                {
                    id    : '36027j1930450d8bf7b10158',
                    name  : 'Vincent Munoz',
                    avatar: 'assets/images/avatars/vincent.jpg'
                }
            ],
            labels  : [
                {
                    id   : '26022e4129ad3a5sc28b36cd',
                    name : 'High Priority',
                    color: 'red'
                },
                {
                    id   : '56027e4119ad3a5dc28b36cd',
                    name : 'Design',
                    color: 'orange'
                },
                {
                    id   : '5640635e19ad3a5dc21416b2',
                    name : 'App',
                    color: 'blue'
                },
                {
                    id   : '6540635g19ad3s5dc31412b2',
                    name : 'Feature',
                    color: 'green'
                }
            ]
        };

        this.scrumboardService.createNewBoard(newBoard).then(() => {
            this.router.navigate(['/apps/scrumboard/boards/' + newBoard.id + '/' + newBoard.uri]);
        });
    }

    ngOnDestroy()
    {
        this.onBoardsChanged.unsubscribe();
    }
}
