import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../profile.service';

@Component({
    selector   : 'fuse-profile-timeline',
    templateUrl: './timeline.component.html',
    styleUrls  : ['./timeline.component.scss']
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
