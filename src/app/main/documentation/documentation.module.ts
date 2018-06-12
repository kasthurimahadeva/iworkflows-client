import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MatIconModule } from '@angular/material';

import { FuseSharedModule } from '@fuse/shared.module';

import { DocsChangelogComponent } from 'app/main/documentation/changelog/changelog.component';

const routes: Routes = [
    {
        path     : 'changelog',
        component: DocsChangelogComponent
    },
    {
        path        : 'components',
        loadChildren: './components/components.module#ComponentsModule'
    },
    {
        path        : 'components-third-party',
        loadChildren: './components-third-party/components-third-party.module#ComponentsThirdPartyModule'
    },
    {
        path        : 'services',
        loadChildren: './services/services.module#ServicesModule'
    }
];

@NgModule({
    declarations: [
        DocsChangelogComponent
    ],
    imports     : [
        RouterModule.forChild(routes),

        MatIconModule,

        FuseSharedModule
    ]
})
export class DocumentationModule
{
}
