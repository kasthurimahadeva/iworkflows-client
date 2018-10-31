import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router} from "@angular/router";
import {Observable} from "rxjs";
import {AuthenticationService} from "../../shared/authentication.service";

@Injectable({providedIn: 'root'})
export class AccessGuard implements CanActivate {

    constructor(private authenticationService: AuthenticationService,
                private router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        console.debug("canActivate called");
        const requiresLogin: boolean = route.data.requiresLogin || false;
        if (requiresLogin) {
            console.debug("login required");
            if(!this.authenticationService.authenticated) this.router.navigate(['login']);
            return this.authenticationService.authenticated;
        }
    }
}