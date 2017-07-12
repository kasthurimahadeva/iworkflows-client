import { MediaChange, MediaMonitor, ObservableMedia } from '@angular/flex-layout';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { EventEmitter, Injectable } from '@angular/core';
import 'rxjs/add/operator/filter';
import { Subscription } from 'rxjs/Subscription';

@Injectable()
export class FuseMatchMedia
{
    activeMediaQuery: string;
    onMediaChange: Observable<string>;
    // onMediaChange = new EventEmitter<string>();
    watcher: Subscription;

    constructor(private observableMedia: ObservableMedia,
                private mediaMonitor: MediaMonitor)
    {
        this.activeMediaQuery = '';

        this.onMediaChange = Observable.create((observer: Observer<string>) =>
        {
            this.observableMedia.subscribe((change: MediaChange) =>
            {

                if ( this.activeMediaQuery !== change.mqAlias )
                {
                    this.activeMediaQuery = change.mqAlias;
                    observer.next(this.activeMediaQuery);
                    console.warn('From observableMedia:', change.mqAlias);

                }
            });
        });
        /*
         this.mediaMonitor.observe('xs').subscribe((change: MediaChange) =>
         {
         console.warn('From mediaMonitor:', change);

         if ( this.activeMediaQuery !== change.mqAlias )
         {
         // this.activeMediaQuery = change.mqAlias;


         // this.onMediaChange.emit(this.activeMediaQuery);
         }
         });*/

        /* this.observableMedia.subscribe((change: MediaChange) =>
         {
         console.warn('From observableMedia:', change.mqAlias);

         if ( this.activeMediaQuery !== change.mqAlias )
         {
         this.activeMediaQuery = change.mqAlias;


         this.onMediaChange.emit(this.activeMediaQuery);
         }
         });*/
        /*this.observableMedia.asObservable()
         .filter((change: MediaChange) => change.mqAlias === 'xs')
         .subscribe(() =>
         {
         console.warn('From observableMedia:', this.activeMediaQuery);

         this.onMediaChange.emit(this.activeMediaQuery);
         });*/

        /*  this.watcher = this.observableMedia.subscribe((change: MediaChange) =>
         {
         this.activeMediaQuery = change ? `'${change.mqAlias}' = (${change.mediaQuery})` : '';
         console.warn('From Watcher:', change.mqAlias);

         });*/
    }
}
