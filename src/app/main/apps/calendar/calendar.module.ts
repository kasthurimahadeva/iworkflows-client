import { NgModule } from '@angular/core';
import { SharedModule } from '../../../core/modules/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './calendar.component';
import { CalendarService } from './calendar.service';
import { CalendarModule } from 'angular-calendar';
import { EventFormDialogComponent } from './event-form/event-form.component';
import { EventDetailDialogComponent } from './event-detail/event-detail.component';

const routes: Routes = [
    {
        path   : '**', component: CalendarComponent, children: [],
        resolve: {
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
        CalendarComponent,
        EventFormDialogComponent,
        EventDetailDialogComponent,
    ],
    providers      : [
        CalendarService
    ],
    entryComponents: [EventFormDialogComponent, EventDetailDialogComponent]
})
export class FuseCalendarModule
{
}
