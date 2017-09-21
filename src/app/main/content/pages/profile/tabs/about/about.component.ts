import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../profile.service';
import { fuseAnimations } from '../../../../../../core/animations';

@Component({
    selector   : 'fuse-profile-about',
    templateUrl: './about.component.html',
    styleUrls  : ['./about.component.scss'],
    animations : fuseAnimations
})
export class FuseProfileAboutComponent implements OnInit
{
    about: any;

    constructor(private profileService: ProfileService)
    {
        this.profileService.aboutOnChanged.subscribe(about => {
            this.about = about;
        });
    }

    ngOnInit()
    {

    }
}
