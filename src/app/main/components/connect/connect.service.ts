import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TokenProvider} from './token-provider.model';

@Injectable({
    providedIn: 'root'
})
export class ConnectService {

    public API = 'server';
    public CAR_API = this.API + '/api/v1/token/providers';

    constructor(private http: HttpClient) {
    }

    getAll(): Observable<any> {
        return this.http.get(this.CAR_API);
    }

    connect(provider: TokenProvider): Observable<any> {

    }
}
