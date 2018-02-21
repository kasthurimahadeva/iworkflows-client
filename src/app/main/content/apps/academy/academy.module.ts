import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FuseSharedModule } from '@fuse/shared.module';

import { FuseAcademyCoursesComponent } from './courses/courses.component';
import { FuseAcademyCourseComponent } from './course/course.component';
import { AcademyCoursesService } from './courses.service';
import { AcademyCourseService } from './course.service';

const routes = [
    {
        path     : 'courses',
        component: FuseAcademyCoursesComponent,
        resolve  : {
            academy: AcademyCoursesService
        }
    },
    {
        path     : 'courses/:courseId/:courseSlug',
        component: FuseAcademyCourseComponent,
        resolve  : {
            academy: AcademyCourseService
        }
    },
    {
        path      : '**',
        redirectTo: 'courses'
    }
];

@NgModule({
    imports     : [
        FuseSharedModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        FuseAcademyCoursesComponent,
        FuseAcademyCourseComponent
    ],
    providers   : [
        AcademyCoursesService,
        AcademyCourseService
    ]
})
export class FuseAcademyModule
{
}
