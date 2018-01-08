import { NgModule } from '@angular/core';
import { SharedModule } from '../../../../core/modules/shared.module';
import { RouterModule } from '@angular/router';
import { KnowledgeBaseService } from './knowledge-base.service';
import { FuseKnowledgeBaseComponent } from './knowledge-base.component';
import { FuseKnowledgeBaseArticleComponent } from './dialogs/article/article.component';

const routes = [
    {
        path     : 'knowledge-base',
        component: FuseKnowledgeBaseComponent,
        resolve  : {
            knowledgeBase: KnowledgeBaseService
        }
    }
];

@NgModule({
    declarations   : [
        FuseKnowledgeBaseComponent,
        FuseKnowledgeBaseArticleComponent
    ],
    imports        : [
        SharedModule,
        RouterModule.forChild(routes)
    ],
    providers      : [
        KnowledgeBaseService
    ],
    entryComponents: [
        FuseKnowledgeBaseArticleComponent
    ]
})
export class KnowledgeBaseModule
{
}
