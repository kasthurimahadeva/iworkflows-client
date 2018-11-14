import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import BpmnViewer from 'bpmn-js/lib/Viewer.js';
import {RequestHistoryService} from '../request-history.service';

@Component({
    selector: 'app-request-details',
    templateUrl: './request-details.component.html',
    styleUrls: ['./request-details.component.scss']
})
export class RequestDetailsComponent implements OnInit {
    taskId: string;
    bpmnDiagram: string;

    @ViewChild('canvas') canvas;

    constructor(
        private route: ActivatedRoute,
        private requestHistoryService: RequestHistoryService) {
    }

    ngOnInit() {
        this.taskId = this.route.snapshot.paramMap.get('taskId');

        this.requestHistoryService.getBpmnDiagram(this.taskId).subscribe(
            diagram => {
                this.bpmnDiagram = diagram;
                this.renderBpmnDiagram();
            },
            error => console.error(error)
        );
    }

    private renderBpmnDiagram(): void {
        const viewer = new BpmnViewer({
            container: this.canvas.nativeElement
        });

        viewer.importXML(this.bpmnDiagram, function (err) {

            if (!err) {
                console.log('success!');
                // viewer.get('canvas').zoom('fit-viewport');
                const canvas = viewer.get('canvas');
                // zoom to fit full viewport
                canvas.zoom('fit-viewport');
                // container.removeClass('with-error')
                //     .addClass('with-diagram');
                // // add marker
                // canvas.addMarker(marker.taskDefinitionKey, 'highlight');
            } else {
                console.log('something went wrong:', err);
            }
        });
    }
}
