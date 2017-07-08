import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FuseComponent} from './core/fuse-component/fuse.component';
import {MuseComponent} from './core/muse/muse.component';
import {LayoutService} from './core/services/layout.service';

@Component({
    selector   : 'fuse-root',
    templateUrl: './app.component.html',
    styleUrls  : ['./app.component.scss'],
    providers  : [LayoutService]
})
export class AppComponent implements OnInit
{
    layoutSettings: { toolbar: any, navigation: any };

    bgValue = 'red';
    title = 'app';
    @ViewChild(FuseComponent) fuseComp: ElementRef;
    @ViewChild(MuseComponent) museComp: ElementRef;

    layoutVertical: boolean;

    constructor(private layoutService: LayoutService)
    {
        this.layoutSettings = layoutService.getSettings();
    }

    ngOnInit()
    {
        this.layoutService.settingsChanged
            .subscribe(
                (newSettings) =>
                {
                    this.layoutSettings = newSettings;
                }
            )
        // console.warn(this.fuseComp);
        // console.warn(this.museComp);
    }

    onNameChange()
    {

    }
}
