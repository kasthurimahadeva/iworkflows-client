import {Component, OnInit} from '@angular/core';
import {ConnectService} from './connect.service';
import {TokenProvider} from './token-provider.model';

@Component({
    selector: 'app-connect',
    templateUrl: './connect.component.html',
    styleUrls: ['./connect.component.scss']
})
export class ConnectComponent implements OnInit {

    providers: Array<TokenProvider>;

    constructor(private connectService: ConnectService) {
    }

    ngOnInit(): void {
        this.connectService.getAll().subscribe(providers => {
           this.providers = providers;
        });
    }

}
