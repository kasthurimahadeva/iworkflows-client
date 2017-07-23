import {
    ChangeDetectionStrategy,
    Component,
    Inject,
    OnInit,
    TemplateRef,
    ViewChild,
    ViewEncapsulation
} from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { CalendarEvent, CalendarEventAction, CalendarEventTimesChangedEvent } from 'angular-calendar';
import { MD_DIALOG_DATA, MdDialog, MdDialogRef } from '@angular/material';
import { EventDialogComponent } from './event-dialog/event-dialog.component';
import {
    startOfDay,
    endOfDay,
    subDays,
    addDays,
    endOfMonth,
    isSameDay,
    isSameMonth,
    addHours
} from 'date-fns';

const colors: any = {
    red   : {
        primary  : '#ad2121',
        secondary: '#FAE3E3'
    },
    blue  : {
        primary  : '#1e90ff',
        secondary: '#D1E8FF'
    },
    yellow: {
        primary  : '#e3bc08',
        secondary: '#FDF1BA'
    }
};

@Component({
    selector       : 'fuse-calendar',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl    : './calendar.component.html',
    styleUrls      : ['./calendar.component.scss'],
    encapsulation  : ViewEncapsulation.None
})
export class CalendarComponent implements OnInit
{
    @ViewChild('dialogContent') dialogContent: TemplateRef<any>;

    view: string;

    viewDate: Date;

    events: CalendarEvent[];

    actions: CalendarEventAction[];

    activeDayIsOpen: boolean;

    refresh: Subject<any> = new Subject();

    dialogRef: any;

    constructor(public dialog: MdDialog)
    {
        this.view = 'month';
        this.viewDate = new Date();
        this.activeDayIsOpen = true;

        this.actions = [
            {
                label  : '<i class="material-icons s-16">edit</i>',
                onClick: ({event}: { event: CalendarEvent }): void => {
                    this.handleEvent('Edited', event);
                }
            },
            {
                label  : '<i class="material-icons s-16">close</i>',
                onClick: ({event}: { event: CalendarEvent }): void => {
                    this.events = this.events.filter(iEvent => iEvent !== event);
                    this.handleEvent('Deleted', event);
                }
            }
        ];

        this.events = [
            {
                start  : subDays(startOfDay(new Date()), 1),
                end    : addDays(new Date(), 1),
                title  : 'A 3 day event',
                color  : colors.red,
                actions: this.actions
            },
            {
                start  : startOfDay(new Date()),
                title  : 'An event with no end date',
                color  : colors.yellow,
                actions: this.actions
            },
            {
                start: subDays(endOfMonth(new Date()), 3),
                end  : addDays(endOfMonth(new Date()), 3),
                title: 'A long event that spans 2 months',
                color: colors.blue
            },
            {
                start    : addHours(startOfDay(new Date()), 2),
                end      : new Date(),
                title    : 'A draggable and resizable event',
                color    : colors.yellow,
                actions  : this.actions,
                resizable: {
                    beforeStart: true,
                    afterEnd   : true
                },
                draggable: true
            }
        ];
    }

    ngOnInit()
    {
    }

    dayClicked({date, events}: { date: Date; events: CalendarEvent[] }): void
    {
        if ( isSameMonth(date, this.viewDate) )
        {
            if (
                (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
                events.length === 0
            )
            {
                this.activeDayIsOpen = false;
            }
            else
            {
                this.activeDayIsOpen = true;
                this.viewDate = date;
            }
        }
    }

    eventTimesChanged({
                          event,
                          newStart,
                          newEnd
                      }: CalendarEventTimesChangedEvent): void
    {
        event.start = newStart;
        event.end = newEnd;
        this.handleEvent('Dropped or resized', event);
        this.refresh.next();
    }

    handleEvent(action: string, event: CalendarEvent): void
    {
        console.log(event, action);
        this.dialogRef = this.dialog.open(EventDialogComponent, {
            data: {
                event : event,
                action: action
            }
        });
        this.dialogRef.afterClosed().subscribe(result => {
            console.info(result);
        });
    }

    addEvent(): void
    {
        this.events.push({
            title    : 'New event',
            start    : startOfDay(new Date()),
            end      : endOfDay(new Date()),
            color    : colors.red,
            draggable: true,
            resizable: {
                beforeStart: true,
                afterEnd   : true
            }
        });
        this.refresh.next();
    }
}


