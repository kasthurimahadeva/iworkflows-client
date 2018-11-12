import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class RouteService {

    constructor(private router: Router) {}

    redirectTo500(): any {
        this.router.navigate(['errors/error-500']);
    }

    redirectTo404(): any {
        this.router.navigate(['errors/error-404']);
    }

    redirectToDashboard(): void {
        this.router.navigate(['dashboard']);
    }

    redirectToLogin(): void {
        this.router.navigate(['login']);
    }
}
