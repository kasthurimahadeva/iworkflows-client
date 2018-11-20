import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs';
import {LeaveFormDetails} from './leave-details.model';
import * as EVENTS from 'events';
import {ToastrService} from 'ngx-toastr';
import { environment } from 'environments/environment';


@Injectable()
export class LeaveFormService {

    public API = environment.server + 'api/v1/forms';
    public PROVIDERS_API = '/leave-form';

    constructor(
        private http: HttpClient,
        private toastr: ToastrService
    ) {
    }

    getLeaveFormDetails(): Subject<LeaveFormDetails> {
        const subject = new Subject<LeaveFormDetails>();
        this.http.get<LeaveFormDetails>(this.API + this.PROVIDERS_API).subscribe(
            data => subject.next(data),
            error => {
                subject.error(error);
                this.toastr.error('Unable to retrive form data, please try again', 'Failed', { progressBar: true });

            },
            () => subject.complete()
        );
        return subject;
    }


}
