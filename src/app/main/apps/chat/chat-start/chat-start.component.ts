import { Component } from '@angular/core';

import { fuseAnimations } from '@fuse/animations';

@Component({
    selector   : 'chat-start',
    templateUrl: './chat-start.component.html',
    styleUrls  : ['./chat-start.component.scss'],
    animations : fuseAnimations
})
export class ChatStartComponent
{
    constructor()
    {
    }
}
