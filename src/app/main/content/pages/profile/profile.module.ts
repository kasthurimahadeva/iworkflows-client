import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '@fuse/modules/shared.module';

import { ProfileService } from './profile.service';
import { FuseProfileComponent } from './profile.component';
import { FuseProfileTimelineComponent } from './tabs/timeline/timeline.component';
import { FuseProfileAboutComponent } from './tabs/about/about.component';
import { FuseProfilePhotosVideosComponent } from './tabs/photos-videos/photos-videos.component';

const routes = [
    {
        path     : 'profile',
        component: FuseProfileComponent,
        resolve  : {
            profile: ProfileService
        }
    }
];

@NgModule({
    declarations: [
        FuseProfileComponent,
        FuseProfileTimelineComponent,
        FuseProfileAboutComponent,
        FuseProfilePhotosVideosComponent
    ],
    imports     : [
        SharedModule,
        RouterModule.forChild(routes)
    ],
    providers   : [
        ProfileService
    ]
})
export class ProfileModule
{
}
