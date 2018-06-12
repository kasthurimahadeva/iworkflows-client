import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
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
    imports: [
        RouterModule.forChild(routes)
    ]
})
export class DocumentationModule
{
}
