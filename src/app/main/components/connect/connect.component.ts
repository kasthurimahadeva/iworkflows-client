import {Component, OnInit} from '@angular/core';
import {ConnectService} from './connect.service';
import {TokenProvider} from './token-provider.model';
import {ActivatedRoute, Router} from '@angular/router';
import 'rxjs-compat/add/operator/filter';
import {ToastrService} from 'ngx-toastr';

@Component({
    selector: 'app-connect',
    templateUrl: './connect.component.html',
    styleUrls: ['./connect.component.scss']
})
export class ConnectComponent implements OnInit {

    providers: Array<TokenProvider>;

    constructor(private connectService: ConnectService,
                private route: ActivatedRoute,
                private router: Router,
                private toastr: ToastrService) {
    }

    ngOnInit(): void {
        this.route.queryParams
            .filter(params => params.code)
            .subscribe(params => {
                this.showInfoToast();
                const provider = this.getProviderFromRedirectUri();
                this.connectService.sendAuthorizationCode(provider, this.getQueryParams(provider))
                    .subscribe(response => {
                        console.log('back from server ' + response.status);
                        if (response.status === 200) {
                            console.log('hit');
                            this.showSuccessToast(provider);
                        }
                    });
            });

        // this.providers = TestProviders;
        this.connectService.getAll().subscribe(providers => {
                this.providers = providers;
            },
            error => {
                console.error(error);
                this.redirectToLogin();
            });
    }

    redirectForAuthorization(provider: TokenProvider): void {
        this.connectService.connect(provider).subscribe(data => {
            window.location.href = data.redirect_uri;
        });
    }

    revokeAuthorizationCode(provider: TokenProvider): void {
        this.showSuccessToast(provider.name);
    }

    getProviderFromRedirectUri(): string {
        if (this.router.url.includes('nextcloud')) {
            return 'nextcloud';
        }
        if (this.router.url.includes('moodle')) {
            return 'moodle';
        }
        if (this.router.url.includes('learnorg')) {
            return 'learnorg';
        }
    }

    getQueryParams(provider: string): string {
        return this.router.url.replace('/connect/' + provider, '');
    }

    showSuccessToast(provider: string): void {
        this.toastr.success('Succesfully connected with ' + provider, 'Authorization success');
    }

    showInfoToast(): void {
        this.toastr.info('Hint: you can continue to browse', 'Connecting...', {progressBar: true, timeOut: 25000});
    }

    redirectToLogin(): void {
        this.router.navigate(['login']);
    }
}
