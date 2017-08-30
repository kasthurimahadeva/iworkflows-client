import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../search.service';
import { DataSource } from '@angular/cdk/collections';

@Component({
    selector   : 'fuse-search-table',
    templateUrl: './table.component.html',
    styleUrls  : ['./table.component.scss']
})
export class FuseSearchTableComponent implements OnInit
{
    table: any;
    dataSource: SearchTableDataSource;
    displayedColumns = ['name', 'position', 'office', 'salary'];

    constructor(private searchService: SearchService)
    {
        this.searchService.tableOnChanged
            .subscribe(table => {
                this.table = table;
            });
    }

    ngOnInit()
    {
        this.dataSource = new SearchTableDataSource(this.searchService);
    }
}

export class SearchTableDataSource extends DataSource<any>
{
    constructor(private searchService: SearchService)
    {
        super();
    }

    connect()
    {
        return this.searchService.tableOnChanged;
    }

    disconnect()
    {

    }
}
