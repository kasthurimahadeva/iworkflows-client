import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter'
})
export class SearchPipe implements PipeTransform
{
    transform(items: any, term: string): any
    {
        if ( term === undefined )
        {
            return items;
        }

        return this.filter(items, term);
    }

    filter(items: any, term: string)
    {
        return items.filter(item => {

                for ( const property in item )
                {
                    if ( !item.hasOwnProperty(property) || !item[property] )
                    {
                        console.log('continueing...');
                        continue;
                    }

                    if ( Array.isArray(item[property]) )
                    {
                        console.log('is Array');
                        return this.filter(item[property], term);
                    }

                    if ( item[property].toString().toLowerCase().includes(term.toLowerCase()) )
                    {
                        console.log('found!');
                        return true;
                    }
                }

                return false;
            }
        );
    }
}


