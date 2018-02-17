import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '@fuse/modules/shared.module';

import { CalendarService } from './calendar.service';
import { CalendarModule } from 'angular-calendar';
import { FuseCalendarComponent } from './calendar.component';
import { FuseCalendarEventFormDialogComponent } from './event-form/event-form.component';

const routes: Routes = [
    {
        path     : '**',
        component: FuseCalendarComponent,
        children : [],
        resolve  : {
            chat: CalendarService
        }
    }
];

@NgModule({
    imports        : [
        SharedModule,
        RouterModule.forChild(routes),
        CalendarModule.forRoot()
    ],
    declarations   : [
        FuseCalendarComponent,
        FuseCalendarEventFormDialogComponent
    ],
    providers      : [
        CalendarService
    ],
    entryComponents: [FuseCalendarEventFormDialogComponent]
})
export class FuseCalendarModule
{
}
