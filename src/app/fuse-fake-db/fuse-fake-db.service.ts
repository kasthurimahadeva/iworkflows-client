import {InMemoryDbService} from 'angular-in-memory-web-api';
import {MailFakeDb} from './mail';
import {ChatFakeDb} from './chat';

export class FuseFakeDbService implements InMemoryDbService
{
    createDb()
    {
        return {
            'mail-mails'   : MailFakeDb.mails,
            'mail-folders' : MailFakeDb.folders,
            'mail-labels'  : MailFakeDb.labels,
            'chat-contacts': ChatFakeDb.contacts,
            'chat-chats'   : ChatFakeDb.chats,
            'chat-user'    : ChatFakeDb.user,
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
