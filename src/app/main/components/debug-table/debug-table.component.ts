import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {fuseAnimations} from '../../../../@fuse/animations';
import {Log} from './log.model';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';

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
      const url = environment.server + 'v1/logs';
      this.httpClient.get<Log[]>(url).subscribe(data => this.dataSource = data.reverse());
      // this.dataSource.push({timestamp: '23', message: 'Welcome'});

  }

}
