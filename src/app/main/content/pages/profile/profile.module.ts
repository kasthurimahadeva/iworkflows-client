import { NgModule } from '@angular/core';
import { SharedModule } from '../../../../core/modules/shared.module';
import { RouterModule } from '@angular/router';

import { FuseProfileComponent } from './profile.component';
import { FuseProfileTimelineComponent } from './tabs/timeline/timeline.component';
import { FuseProfileAboutComponent } from './tabs/about/about.component';
import { FuseProfilePhotosVideosComponent } from './tabs/photos-videos/photos-videos.component';
import { ProfileService } from './profile.service';

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
