import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TaskService } from 'app/shared/task.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  constructor(private http: HttpClient, private camundaTaskService: TaskService) {}

    ngOnInit(): void {
        this.connect();
    }

    connect(): void {
        this.camundaTaskService.connect();
    }

    send(): void {
        this.camundaTaskService.send();
    }
}
