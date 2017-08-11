import { AfterContentChecked, Directive, ElementRef, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[fuseIfOnDom]'
})
export class FuseIfOnDomDirective implements AfterContentChecked
{
    isCreated = false;

    constructor(
        private templateRef: TemplateRef<any>,
        private viewContainer: ViewContainerRef,
        private element: ElementRef
    )
    {
    }

    ngAfterContentChecked()
    {
        if ( this.element.nativeElement.isConnected && !this.isCreated )
        {
            setTimeout(() => {
                this.viewContainer.createEmbeddedView(this.templateRef);
            }, 0);
            this.isCreated = true;
        }
        else if ( this.isCreated && !this.element.nativeElement.isConnected )
        {
            this.viewContainer.clear();
            this.isCreated = false;
        }
    }
}
