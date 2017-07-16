import {Component, OnInit} from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import {ActivatedRoute, Data} from '@angular/router';
import {MailModel} from './mail.model';

@Component({
    selector   : 'fuse-mail',
    templateUrl: './mail.component.html',
    styleUrls  : ['./mail.component.scss']
})
export class MailComponent implements OnInit
{
    mails: FirebaseListObservable<any[]>;
    selectedMail: MailModel;

    constructor(private db: AngularFireDatabase, private route: ActivatedRoute)
    {
        console.log('mail component inited');

        // this.mails = db.list('/mail/data');

        /*this.mails.subscribe(response =>
         {
         console.log(response);

         console.log('going offline...');
         this.db.database.goOffline();
         });*/
    }

    ngOnInit()
    {
        this.route.data.subscribe((data: Data) =>
        {
            console.warn(data['mails']);
        });
    }

    onMailSelect(mail)
    {
        console.info('on mail select', mail);
        this.selectedMail = mail;
    }
}
