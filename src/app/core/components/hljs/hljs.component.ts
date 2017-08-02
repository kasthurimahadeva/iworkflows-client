import { Component, ElementRef, Input, OnInit } from '@angular/core';
import * as hljs from 'highlight.js';

@Component({
    selector : 'fuse-hljs',
    template : ' ',
    styleUrls: ['./hljs.component.scss']
})
export class FuseHljsComponent implements OnInit
{
    hljs: any;

    @Input('source') source: any;
    @Input('lang') lang: string;

    constructor(
        private elementRef: ElementRef
    )
    {
        this.hljs = hljs;
    }

    ngOnInit()
    {
        if ( !this.source && this.lang )
        {
            return;
        }

        this.elementRef.nativeElement.innerHTML =
            `<pre><code class="highlight">` + this.hljs.highlight(this.lang, this.source).value + `</code></pre>`;
    }
}
