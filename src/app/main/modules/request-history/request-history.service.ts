import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {SubmittedRequest} from './submitted.request.model';
import {BpmnDiagramModel} from './bpmn-diagram.model';
import { environment } from 'environments/environment';

@Injectable()
export class RequestHistoryService {
    constructor(private http: HttpClient) {
    }

    getSubmittedTasks(): Observable<SubmittedRequest[]> {
        return this.http.get<SubmittedRequest[]>(environment.server + 'api/v1/camunda/submitted-tasks');
    }

    getBpmnDiagram(taskId: string): Observable<BpmnDiagramModel> {
        return this.http.get<BpmnDiagramModel>(environment.server + 'api/v1/camunda/diagram/' + taskId);
    }
}
