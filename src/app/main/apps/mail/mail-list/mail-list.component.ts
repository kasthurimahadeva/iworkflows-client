import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MailModel} from '../mail.model';
import {MailDataService} from '../mail-data.service';
import {Http} from '@angular/http';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector   : 'fuse-mail-list',
    templateUrl: './mail-list.component.html',
    styleUrls  : ['./mail-list.component.scss']
})
export class MailListComponent implements OnInit
{
    mails: MailModel[];

    @Input('selectedMail') public selectedMail: MailModel;
    @Output() onMailSelect = new EventEmitter<MailModel>();

    constructor(private mailDataService: MailDataService,
                private http: Http,
                private route: ActivatedRoute)
    {
        route.data.subscribe(response =>
        {
            console.info(response.mailDB.json());
            this.mails = response.mailDB.json().data;
        });
    }

    ngOnInit()
    {


    }

    onSave()
    {
        /*this.http.get('api/mails?important=true&labels=1').subscribe(response =>
         {
         console.log(response);
         });*/

        this.http.get('api/mail-mails').subscribe(response =>
        {
            console.log(response.json());
        });

        /*this.http.get('api/mail/folders/0').subscribe(response =>
         {
         console.log(response);
         });*/


        /*this.http.post('api/mails', {id: '2', subject: 'Test test'}).subscribe(response =>
         {
         console.log(response);

         this.http.get('api/mails/2').subscribe(response2 =>
         {
         console.log(response2);
         });
         });*/

    }

    selectMail(mail)
    {
        this.selectedMail = mail;
        this.onMailSelect.emit(mail);
    }

}
