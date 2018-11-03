import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthenticationService} from '../../shared/authentication.service';

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {

    constructor(private authenticationService: AuthenticationService,
                private router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        // const requiresLogin: boolean = route.data.requiresLogin || false;
        // if (requiresLogin) {
        //     if (!this.authenticationService.authenticated) {
        //         console.log('login required');
        //         this.router.navigate(['login']);
        //     }
        //     return this.authenticationService.authenticated;
        // }

        if (localStorage.getItem('authenticated') === 'true') {
            // logged in so return true
            return true;
        }

        // not logged in so redirect to login page with the return url
        this.router.navigate(['login'], { queryParams: { returnUrl: state.url }});
        return false;
    }
}
