import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule, MatCheckboxModule, MatDialogModule, MatFormFieldModule, MatIconModule, MatInputModule, MatMenuModule, MatRippleModule, MatSelectModule, MatSidenavModule, MatToolbarModule } from '@angular/material';
import { TranslateModule } from '@ngx-translate/core';

import { FuseSharedModule } from '@fuse/shared.module';

import { MailAppStoreModule } from 'app/main/apps/mail-ngrx/store/store.module';
import * as fromGuards from 'app/main/apps/mail-ngrx/store/guards/index';
import { FuseMailNgrxComponent } from 'app/main/apps/mail-ngrx/mail.component';
import { FuseMailNgrxListComponent } from 'app/main/apps/mail-ngrx/mail-list/mail-list.component';
import { FuseMailNgrxListItemComponent } from 'app/main/apps/mail-ngrx/mail-list/mail-list-item/mail-list-item.component';
import { FuseMailNgrxDetailsComponent } from 'app/main/apps/mail-ngrx/mail-details/mail-details.component';
import { FuseMailNgrxMainSidenavComponent } from 'app/main/apps/mail-ngrx/sidenavs/main/main-sidenav.component';
import { FuseMailNgrxComposeDialogComponent } from 'app/main/apps/mail-ngrx/dialogs/compose/compose.component';
import { MailNgrxService } from 'app/main/apps/mail-ngrx/mail.service';

const routes: Routes = [
    {
        path       : 'label/:labelHandle',
        component  : FuseMailNgrxComponent,
        canActivate: [fromGuards.ResolveGuard]
    },
    {
        path       : 'label/:labelHandle/:mailId',
        component  : FuseMailNgrxComponent,
        canActivate: [fromGuards.ResolveGuard]
    },
    {
        path     : 'filter/:filterHandle',
        component: FuseMailNgrxComponent,
        canActivate: [fromGuards.ResolveGuard]
    },
    {
        path     : 'filter/:filterHandle/:mailId',
        component: FuseMailNgrxComponent,
        canActivate: [fromGuards.ResolveGuard]
    },
    {
        path     : ':folderHandle',
        component: FuseMailNgrxComponent,
        canActivate: [fromGuards.ResolveGuard]
    },
    {
        path     : ':folderHandle/:mailId',
        component: FuseMailNgrxComponent,
        canActivate: [fromGuards.ResolveGuard]
    },
    {
        path      : '**',
        redirectTo: 'inbox'
    }
];

@NgModule({
    declarations   : [
        FuseMailNgrxComponent,
        FuseMailNgrxListComponent,
        FuseMailNgrxListItemComponent,
        FuseMailNgrxDetailsComponent,
        FuseMailNgrxMainSidenavComponent,
        FuseMailNgrxComposeDialogComponent
    ],
    imports        : [
        RouterModule.forChild(routes),

        MatButtonModule,
        MatCheckboxModule,
        MatDialogModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatMenuModule,
        MatRippleModule,
        MatSelectModule,
        MatSidenavModule,
        MatToolbarModule,

        TranslateModule,

        FuseSharedModule,

        MailAppStoreModule
    ],
    providers      : [
        MailNgrxService,
        fromGuards.ResolveGuard
    ],
    entryComponents: [FuseMailNgrxComposeDialogComponent]
})
export class FuseMailNgrxModule
{
}
