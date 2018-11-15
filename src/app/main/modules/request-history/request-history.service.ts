import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {SubmittedRequest} from './submitted.request.model';
import {BpmnDiagramModel} from './bpmn-diagram.model';

@Injectable()
export class RequestHistoryService {
    constructor(private http: HttpClient) {
    }

    getSubmittedTasks(): Observable<SubmittedRequest[]> {
        return this.http.get<SubmittedRequest[]>('server/api/v1/camunda/submitted-tasks');
    }

    getBpmnDiagram(taskId: string): Observable<BpmnDiagramModel> {
        return this.http.get<BpmnDiagramModel>('server/api/v1/camunda/diagram/' + taskId);
    }
}
