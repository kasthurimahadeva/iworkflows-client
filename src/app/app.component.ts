import { Component } from '@angular/core';
import { FuseSplashScreenService } from './core/services/splash-screen.service';

@Component({
    selector   : 'fuse-root',
    templateUrl: './app.component.html',
    styleUrls  : ['./app.component.scss']
})
export class AppComponent
{
    constructor(private fuseSplashScreen: FuseSplashScreenService)
    {
    }
}
