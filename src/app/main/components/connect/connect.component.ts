import { Component, OnInit } from '@angular/core';
import { ConnectService } from './connect.service';
import { TokenProvider } from './token-provider.model';
import { ActivatedRoute, Router } from '@angular/router';
import 'rxjs-compat/add/operator/filter';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-connect',
    templateUrl: './connect.component.html',
    styleUrls: ['./connect.component.scss']
})
export class ConnectComponent implements OnInit {
    providers: Array<TokenProvider>;

    constructor(
        private connectService: ConnectService,
        private route: ActivatedRoute,
        private router: Router,
        private toastr: ToastrService
    ) {}

    ngOnInit(): void {
        this.route.queryParams
            .filter(params => params.code)
            .subscribe(params => {
                const infoToastId: number = this.showInfoToast();
                const provider = this.getProviderFromRedirectUri();
                this.connectService
                    .sendAuthorizationCode(provider, this.getQueryParams(provider))
                    .subscribe(response => {
                        if (response.status === 200) {
                            console.log('hit');
                            this.showSuccessToast(provider, infoToastId);
                            this.getProviders();
                        }
                    });
            });

        // this.providers = TestProviders;
        this.getProviders();
    }

    redirectForAuthorization(provider: TokenProvider): void {
        if (provider.name.toLowerCase() === 'moodle') {
            this.router.navigate(['moodle-login']);
        } else {
            this.connectService.connect(provider).subscribe(data => {
                window.location.href = data.redirect_uri;
            });
        }

    }

    revokeAuthorizationCode(provider: TokenProvider): void {
        // this.showSuccessToast(provider.name);
        this.connectService.revokeAuthorizationCode(provider).subscribe(
            response => {
                if (response.status === 200) {
                    this.showSuccessRevokeToast(provider.name);
                    this.getProviders();
                }
            },
            error => {
                this.toastr.error('Unable to disconnect', 'Disconnect Failed', { progressBar: true });
                this.redirectToDashboard();
            }

        );
    }

    private getProviders(): void {
        this.connectService.getAll().subscribe(
            providers => {
                this.providers = providers;
            },
            error => {
                console.log(error);
                this.toastr.error('Unable to get provider list', 'Fetch failed', { progressBar: true });
                this.redirectToDashboard();
            }
        );
    }

    getProviderFromRedirectUri(): string {
        return this.route.snapshot.paramMap.get('provider');
    }

    getQueryParams(provider: string): string {
        return this.router.url.replace('/connect/' + provider, '');
    }

    showSuccessToast(provider: string, infoToastId: number): void {
        this.toastr.success('Successfully connected with ' + provider, 'Authorization success');
        this.toastr.clear(infoToastId);
    }

    showSuccessRevokeToast(provider: string): void {
        this.toastr.success('Successfylly disconnected from ' + provider, 'Revoke success');
    }

    showInfoToast(): number {
        return this.toastr.info('Hint: you can continue to browse', 'Connecting...', {
            progressBar: true,
            timeOut: 25000,
            progressAnimation: 'increasing'
        }).toastId;
    }

    redirectToDashboard(): void {
        this.router.navigate(['dashboard']);
    }
}
