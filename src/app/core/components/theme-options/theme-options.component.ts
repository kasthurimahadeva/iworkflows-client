import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { style, animate, AnimationBuilder, AnimationPlayer } from '@angular/animations';
import { Subscription } from 'rxjs/Subscription';
import { FuseLayoutService } from '../../services/layout.service';

@Component({
    selector   : 'fuse-theme-options',
    templateUrl: './theme-options.component.html',
    styleUrls  : ['./theme-options.component.scss']
})
export class FuseThemeOptionsComponent implements OnInit, OnDestroy
{
    @ViewChild('openButton') openButton;
    @ViewChild('panel') panel;

    public player: AnimationPlayer;

    onSettingsChanged: Subscription;
    layoutSettings: { navigation: string, toolbar: string, footer: string };

    constructor(
        private animationBuilder: AnimationBuilder,
        private layoutService: FuseLayoutService
    )
    {
        this.onSettingsChanged =
            this.layoutService.onSettingsChanged
                .subscribe(
                    (newSettings) => {
                        this.layoutSettings = newSettings;
                    }
                );
    }

    closeBar()
    {
        this.player =
            this.animationBuilder
                .build([
                    style({transform: 'translate3d(0,0,0)'}),
                    animate('400ms ease', style({transform: 'translate3d(100%,0,0)'}))
                ]).create(this.panel.nativeElement);
        this.player.play();
    }

    openBar()
    {
        this.player =
            this.animationBuilder
                .build([
                    style({transform: 'translate3d(100%,0,0)'}),
                    animate('400ms ease', style({transform: 'translate3d(0,0,0)'}))
                ]).create(this.panel.nativeElement);
        this.player.play();
    }

    ngOnInit()
    {
    }

    ngOnDestroy()
    {
        this.onSettingsChanged.unsubscribe();
    }

    onLayoutSettingsChanged()
    {
        this.layoutService.onSettingsChanged.next(this.layoutSettings);
    }
}
