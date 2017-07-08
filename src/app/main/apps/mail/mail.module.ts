import {NgModule} from '@angular/core';
import {SharedModule} from '../../../core/shared.module';
import {RouterModule, Routes} from '@angular/router';
import {MailComponent} from './mail.component';
import {MainSidenavComponent} from './sidenavs/main/main-sidenav.component';
import {ClassicViewComponent} from './views/classic/classic-view.component';

const routes: Routes = [
    {
        path: 'apps/mail', component: MailComponent, children: [
        {path: '', component: ClassicViewComponent, outlet: 'view'}
    ]
    }
]

@NgModule({
    imports     : [
        SharedModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        MailComponent,
        MainSidenavComponent,
        ClassicViewComponent
    ]
})
export class MailModule
{
}
