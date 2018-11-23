import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { RouteService } from 'app/shared/route.service';
import { ToastrService } from 'ngx-toastr';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { AuthenticationService } from '../../shared/authentication.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(
        private authenticationService: AuthenticationService,
        private toastr: ToastrService,
        private routeService: RouteService,
        private router: Router
    ) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(
            catchError(err => {
                console.error(err);
                if (err.status === 401) {
                    // auto logout if 401 response returned from api
                    if (this.router.url !== '/login') {
                        this.toastr.error(
                            'Unauthorized request',
                            'Please (re)login',
                            { progressBar: true }
                        );
                        this.authenticationService.logout();
                        this.routeService.redirectToLogin();
                    }
                } else if (err.status === 500) {
                    this.routeService.redirectTo500();
                } else if (err.status === 404) {
                    this.routeService.redirectTo404();
                }

                // const error = err.error.message;
                return throwError(err);
            })
        );
    }
}
