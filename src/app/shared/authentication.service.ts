import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import 'rxjs/add/operator/finally';

@Injectable()
export class AuthenticationService {

    // TODO: change authenticated back to false
    authenticated = true;

    redirectUrl: string;

    constructor(private http: HttpClient,
                private router: Router) {
    }

    authenticate(credentials, callback) {

        const headers = new HttpHeaders(credentials ? {
            authorization: 'Basic ' + btoa(credentials.username + ':' + credentials.password)
        } : {});

        this.http.get('/server/user', {headers: headers}).subscribe(response => {
            if (response['name']) {
                this.authenticated = true;
                localStorage.setItem('authenticated', 'true');
            } else {
                localStorage.setItem('authenticated', 'false');
                this.authenticated = false;
            }
            return callback && callback();
        });

    }

    logout(): void {
        this.http.post('/server/logout', {}).finally(() => {
            this.authenticated = false;
            localStorage.removeItem('currentUser');
            this.router.navigate(['login']);
        }).subscribe(() => {
                console.log('log out success');
            },
            error => {
                console.error(error);
            });
    }
}
