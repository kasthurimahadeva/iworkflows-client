import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
    selector   : 'fuse-mail-list',
    templateUrl: './mail-list.component.html',
    styleUrls  : ['./mail-list.component.scss']
})
export class MailListComponent implements OnInit
{
    mailsDB: FirebaseListObservable<any[]>;
    mails: any;

    constructor(private db: AngularFireDatabase)
    {
        this.mailsDB = this.db.list('/mail/data', {
            query: {
                orderByChild: 'important',
                equalTo     : true
            }
        });
    }

    ngOnInit()
    {
        this.mailsDB.subscribe((response) =>
        {
            console.log('mail list component inited');
            console.log(response);

            this.mails = response;
        });

    }

    onSave()
    {
        // this.mailList.push({name: 'Mustafa'});
        this.mails.push({subject: 'deneme'});

        // this.mails.update({test: 'deneme'});
        // this.mails.set({test: 'deneme'});

        /*this.mails.set({
         name: 'sercan',
         age : 29
         });*/

        console.log(this.mails);
    }

    onGet()
    {
        this.mails.subscribe((response) =>
        {

            console.log(response);
        });

        /*const get = this.http.get('https://fuse2-demo.firebaseio.com/mail.json');

         get.subscribe((response) =>
         {
         console.log(response);
         });*/
    }

    onGoOnline()
    {
        this.db.database.goOnline();
    }

    onGoOffline()
    {
        this.db.database.goOffline();
    }

}
