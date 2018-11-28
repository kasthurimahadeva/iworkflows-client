import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TokenProvider} from './token-provider.model';
import { environment } from 'environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ConnectService {

    public API = environment.server + 'v1/token';
    public PROVIDERS_API = '/providers';

    constructor(private http: HttpClient) {
    }

    getAll(): Observable<any> {
        return this.http.get(this.API + this.PROVIDERS_API);
    }

    connect(provider: TokenProvider): Observable<any> {
        return this.http.get(this.API + '/' + provider.redirectUri);
    }

    sendAuthorizationCode(tokenProvider: string, queryParams: string): Observable<any> {
        return this.http.post(this.API + '/' + 'code', {provider: tokenProvider, query: queryParams}, {observe: 'response'});
    }

    revokeAuthorizationCode(provider: TokenProvider): Observable<any> {
        return this.http.delete(this.API + '/' + 'revoke' + '/' + provider.name.toLowerCase(), {observe: 'response'});
    }
}
