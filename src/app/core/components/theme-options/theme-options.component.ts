import { Component, ElementRef, HostBinding, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
import { style, animate, AnimationBuilder, AnimationPlayer } from '@angular/animations';
import { Subscription } from 'rxjs/Subscription';
import { FuseConfigService } from '../../services/config.service';
import { fuseAnimations } from '../../animations';

@Component({
    selector   : 'fuse-theme-options',
    templateUrl: './theme-options.component.html',
    styleUrls  : ['./theme-options.component.scss'],
    animations : fuseAnimations
})
export class FuseThemeOptionsComponent implements OnInit, OnDestroy
{
    @ViewChild('openButton') openButton;
    @ViewChild('panel') panel;
    @ViewChild('overlay') overlay: ElementRef;

    public player: AnimationPlayer;
    fuseSettings: any;

    onSettingsChanged: Subscription;

    @HostBinding('class.bar-closed') barClosed: boolean;

    constructor(
        private animationBuilder: AnimationBuilder,
        private fuseConfig: FuseConfigService,
        private renderer: Renderer2
    )
    {
        this.barClosed = true;

        this.onSettingsChanged =
            this.fuseConfig.onSettingsChanged
                .subscribe(
                    (newSettings) => {
                        this.fuseSettings = newSettings;
                    }
                );
    }

    ngOnInit()
    {
        this.renderer.listen(this.overlay.nativeElement, 'click', () => {
            this.closeBar();
        });
    }

    onSettingsChange()
    {
        this.fuseConfig.setSettings(this.fuseSettings);
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

        this.player.onDone(() => {
            this.barClosed = true;
        });
    }

    openBar()
    {
        this.barClosed = false;

        this.player =
            this.animationBuilder
                .build([
                    style({transform: 'translate3d(100%,0,0)'}),
                    animate('400ms ease', style({transform: 'translate3d(0,0,0)'}))
                ]).create(this.panel.nativeElement);

        this.player.play();
    }

    ngOnDestroy()
    {
        this.onSettingsChanged.unsubscribe();
    }
}
