import { InMemoryDbService } from 'angular-in-memory-web-api';
import { MailFakeDb } from './mail';
import { ChatFakeDb } from './chat';
import { CalendarFakeDb } from './calendar';
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

export class FuseFakeDbService implements InMemoryDbService
{
    createDb()
    {
        return {
            'mail-mails'   : MailFakeDb.mails,
            'mail-folders' : MailFakeDb.folders,
            'mail-filters' : MailFakeDb.filters,
            'mail-labels'  : MailFakeDb.labels,
            'chat-contacts': ChatFakeDb.contacts,
            'chat-chats'   : ChatFakeDb.chats,
            'chat-user'    : ChatFakeDb.user,
            'calendar'     : CalendarFakeDb.data
        };
    }

    /*get(args): Observable<Response>
     {
     console.log(args);

     // return new Observable<Response>

     return Observable.create((observer: Observer<Response>) =>
     {
     const response = new Response({id: '1111'});
     observer.next(response);
     });

     }*/
}
