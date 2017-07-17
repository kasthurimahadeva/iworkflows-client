import {InMemoryDbService} from 'angular-in-memory-web-api';
import {MailFakeDb} from './mail';

export class FuseFakeDbService implements InMemoryDbService
{
    createDb()
    {
        return {
            'mail-mails'   : MailFakeDb.mails,
            'mail-folders': MailFakeDb.folders,
            'mail-labels' : MailFakeDb.labels
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
