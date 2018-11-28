import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/finally';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'environments/environment';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {
    authenticated = false;

    redirectUrl: string;

    constructor(private http: HttpClient, private router: Router, private toastr: ToastrService) {}

    authenticate(credentials, callback): any {
        const headers = new HttpHeaders(
            credentials
                ? {
                      authorization:
                          'Basic ' + btoa(credentials.username + ':' + credentials.password)
                  }
                : {}
        );

        this.http.get<any>(environment.server + 'v1/user', { headers: headers }).subscribe(
            response => {
                if (response['name']) {
                    this.authenticated = true;
                    localStorage.setItem('principal', JSON.stringify(response));
                    localStorage.setItem('authenticated', 'true');
                    localStorage.setItem(
                        'currentUser',
                        btoa(credentials.username + ':' + credentials.password)
                    );
                } else {
                    localStorage.setItem('authenticated', 'false');
                    this.authenticated = false;
                }
                return callback && callback();
            },
            error => {
                console.error(error);
                this.toastr.error('Username or password is incorrect', 'Login failed', {
                    progressBar: true
                });
            }
        );
    }

    getLoggedInUserName(): string {
        const principal: any = localStorage.getItem('principal');
        if (principal !== null) {
            return JSON.parse(principal).name;
        } else {
            // this.router.navigate(['login']);
            return null;
        }
    }

    logout(): void {
        this.http
            .post(environment.server + 'logout', {})
            ._finally(() => {
                this.authenticated = false;
                localStorage.removeItem('principal');
                localStorage.removeItem('authenticated');
                localStorage.removeItem('currentUser');
                this.router.navigate(['login']);
            })
            .subscribe(
                () => {
                    console.log('log out success');
                },
                error => {
                    console.error(error);
                }
            );
    }
}
