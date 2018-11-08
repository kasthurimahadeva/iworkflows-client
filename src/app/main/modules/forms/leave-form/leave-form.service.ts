import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LeaveFormService {

    public API = 'server/api/v1/forms';
    public PROVIDERS_API = '/leave-form';

    constructor(private http: HttpClient) {
    }

    getAll(): Observable<any> {
        return this.http.get(this.API + this.PROVIDERS_API);
    }
}
