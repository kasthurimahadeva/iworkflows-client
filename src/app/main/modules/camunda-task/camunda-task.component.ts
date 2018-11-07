import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

declare let EventSource: any;

@Component({
    selector: 'app-camunda-task',
    templateUrl: './camunda-task.component.html',
    styleUrls: ['./camunda-task.component.scss']
})
export class CamundaTaskComponent implements OnInit {

    constructor(private http: HttpClient) {
    }

    ngOnInit(): void {
        this.connect();
    }

    connect(): void {
        const source = new EventSource('http://localhost:8080/stream', {withCredentials: true});
        source.addEventListener('message', message => {
            // let n: Notification; // need to have this Notification model class in angular2
            // n = JSON.parse(message.data);
            console.log(message.data);
        });
    }

    send(): void {
        this.http.get('server/sse/emit', {observe: 'response'}).subscribe(
            response => {
                console.log('Triggered ' + response);
                if (response.status === 200) {
                    console.log('success');
                }
            }
        );
    }
}
