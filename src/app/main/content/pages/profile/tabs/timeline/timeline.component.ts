import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../profile.service';
import { fuseAnimations } from '../../../../../../core/animations';

@Component({
    selector   : 'fuse-profile-timeline',
    templateUrl: './timeline.component.html',
    styleUrls  : ['./timeline.component.scss'],
    animations : fuseAnimations
})
export class FuseProfileTimelineComponent implements OnInit
{
    timeline: any;

    constructor(private profileService: ProfileService)
    {
        this.profileService.timelineOnChanged.subscribe(timeline => {
            this.timeline = timeline;
        });
    }

    ngOnInit()
    {

    }
}
