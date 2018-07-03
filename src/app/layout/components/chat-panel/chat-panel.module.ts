import { NgModule } from '@angular/core';
import { MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatListModule, MatRippleModule, MatTabsModule } from '@angular/material';

import { FuseSharedModule } from '@fuse/shared.module';

import { ChatPanelComponent } from 'app/layout/components/chat-panel/chat-panel.component';
import { ChatPanelService } from 'app/layout/components/chat-panel/chat-panel.service';

@NgModule({
    declarations: [
        ChatPanelComponent
    ],
    providers   : [
        ChatPanelService
    ],
    imports     : [
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatTabsModule,
        MatRippleModule,

        FuseSharedModule
    ],
    exports     : [
        ChatPanelComponent
    ]
})
export class ChatPanelModule
{
}
