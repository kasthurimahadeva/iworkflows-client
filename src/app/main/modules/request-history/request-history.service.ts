import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {SubmittedRequest} from './submitted.request.model';

@Injectable()
export class RequestHistoryService {
    constructor(private http: HttpClient) {
    }

    getSubmittedTasks(): Observable<SubmittedRequest[]> {
        return this.http.get<SubmittedRequest[]>('server/api/v1/camunda/submitted-tasks');
    }
}
