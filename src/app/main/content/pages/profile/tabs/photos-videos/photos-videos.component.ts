import { Component, OnInit } from '@angular/core';

import { ProfileService } from '../../profile.service';
import { fuseAnimations } from '../../../../../../core/animations';

@Component({
    selector   : 'fuse-profile-photos-videos',
    templateUrl: './photos-videos.component.html',
    styleUrls  : ['./photos-videos.component.scss'],
    animations : fuseAnimations
})
export class FuseProfilePhotosVideosComponent implements OnInit
{
    photosVideos: any;

    constructor(private profileService: ProfileService)
    {
        this.profileService.photosVideosOnChanged.subscribe(photosVideos => {
            this.photosVideos = photosVideos;
        });
    }

    ngOnInit()
    {

    }
}
