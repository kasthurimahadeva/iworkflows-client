import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {fuseAnimations} from '../../../../@fuse/animations';
import {Log} from './log.model';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'app-debug-table',
    templateUrl: './debug-table.component.html',
    styleUrls: ['./debug-table.component.scss'],
    animations: fuseAnimations,
    encapsulation: ViewEncapsulation.None
})
export class DebugTableComponent implements OnInit {
    displayedColumns: string[] = ['id', 'timeStamp', 'message'];
    dataSource: Log[] = [];

  constructor(
      private httpClient: HttpClient
  ) { }

  ngOnInit(): void {
      this.getLogDetails();
  }

  getLogDetails(): void {
      const url = '';
      this.httpClient.get<Log[]>(url).subscribe(data => this.dataSource = data);
      // this.dataSource.push({timeStamp: '23', message: 'Welcome'});

  }

}
