import {LeaveFormDetails} from './leave-details.model';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {LeaveFormService} from './leave-form.service';
import {map} from 'rxjs/operators';
import {Injectable} from '@angular/core';

@Injectable()
export class LeaveFormDataResolver implements Resolve<LeaveFormDetails> {

    constructor(private leaveFormService: LeaveFormService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<LeaveFormDetails> | Promise<LeaveFormDetails> | LeaveFormDetails {
        return this.leaveFormService.getLeaveFormDetails().pipe(map(eventDetails => eventDetails));
    }

}
