import { Component, ViewEncapsulation, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
    selector     : 'knowledge-base-article',
    templateUrl  : './article.component.html',
    styleUrls    : ['./article.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class KnowledgeBaseArticleComponent
{
    article: any;

    constructor(
        private _matDialogRef: MatDialogRef<KnowledgeBaseArticleComponent>,
        @Inject(MAT_DIALOG_DATA) public _data: any
    )
    {
    }
}
