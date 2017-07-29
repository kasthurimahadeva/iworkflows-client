import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../profile.service';

@Component({
    selector   : 'fuse-profile-about',
    templateUrl: './about.component.html',
    styleUrls  : ['./about.component.scss']
})
export class ProfileAboutComponent implements OnInit
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
