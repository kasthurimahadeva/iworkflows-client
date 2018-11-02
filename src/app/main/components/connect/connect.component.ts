import {Component, OnInit} from '@angular/core';
import {ConnectService} from './connect.service';
import {TokenProvider} from './token-provider.model';
import {ActivatedRoute, Router} from '@angular/router';
import 'rxjs-compat/add/operator/filter';

@Component({
    selector: 'app-connect',
    templateUrl: './connect.component.html',
    styleUrls: ['./connect.component.scss']
})
export class ConnectComponent implements OnInit {

    providers: Array<TokenProvider>;

    constructor(private connectService: ConnectService,
                private route: ActivatedRoute,
                private router: Router) {
    }

    ngOnInit(): void {
        this.route.queryParams
            .filter(params => params.code)
            .subscribe(params => {
                const provider = this.getProvider();
                this.connectService.sendAuthorizationCode(provider, this.getQueryParams(provider))
                    .subscribe(response => {
                        if (response.status === 200) {
                            // TODO: show a toast notification instead
                            console.log(response);
                        }
                    });
            });

        this.connectService.getAll().subscribe(providers => {
            this.providers = providers;
        });
    }

    connectClicked(provider: TokenProvider): void {
        this.connectService.connect(provider).subscribe(data => {
            console.log(data);
            window.location.href = data.redirect_uri;
        });
    }

    revokeClicked(provider: TokenProvider): void {
    }

    getProvider(): string {
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
}
