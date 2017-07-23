import { NgModule } from '@angular/core';

import { KeysPipe } from './keys.pipe';
import { GetByIdPipe } from './getById.pipe';
import { HtmlToPlaintextPipe } from './htmlToPlaintext.pipe';
import { SearchPipe } from './search.pipe';
import { FilterPipe } from './filter.pipe';

@NgModule({
    declarations: [
        KeysPipe,
        GetByIdPipe,
        HtmlToPlaintextPipe,
        SearchPipe,
        FilterPipe

    ],
    imports     : [],
    exports     : [
        KeysPipe,
        GetByIdPipe,
        HtmlToPlaintextPipe,
        SearchPipe,
        FilterPipe
    ]
})

export class FusePipesModule
{

}
