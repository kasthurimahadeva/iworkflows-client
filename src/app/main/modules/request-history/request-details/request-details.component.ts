import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import BpmnViewer from 'bpmn-js/lib/Viewer.js';
import {RequestHistoryService} from '../request-history.service';
import {BpmnDiagramModel} from '../bpmn-diagram.model';

@Component({
    selector: 'app-request-details',
    templateUrl: './request-details.component.html',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./request-details.component.scss',
        '../../../../../../node_modules/bpmn-js/dist/assets/diagram-js.css',
        '../../../../../../node_modules/bpmn-js/dist/assets/bpmn-font/css/bpmn-embedded.css']
})
export class RequestDetailsComponent implements OnInit {
    taskId: string;
    bpmnDiagram: BpmnDiagramModel;

    @ViewChild('canvas') canvas;

    constructor(
        private route: ActivatedRoute,
        private requestHistoryService: RequestHistoryService) {
    }

    ngOnInit(): void {
        this.taskId = this.route.snapshot.paramMap.get('taskId');

        this.requestHistoryService.getBpmnDiagram(this.taskId).subscribe(
            diagram => {
                this.bpmnDiagram = diagram;
                this.renderBpmnDiagram(this.bpmnDiagram.xml, this.bpmnDiagram.taskDefinitionKey);
            },
            error => console.error(error)
        );
    }

    private renderBpmnDiagram(bpmnXml: string, taskDefinitionKey: string): void {
        const viewer = new BpmnViewer({
            container: this.canvas.nativeElement,
            width: '100%',
            height: '100%'
        });

        viewer.importXML(bpmnXml, function (err): void {

            if (!err) {
                // viewer.get('canvas').zoom('fit-viewport');
                const canvas = viewer.get('canvas');
                // zoom to fit full viewport
                canvas.zoom('fit-viewport');
                // container.removeClass('with-error')
                //     .addClass('with-diagram');
                // // add marker
                canvas.addMarker(taskDefinitionKey, 'highlight');
            } else {
                console.log('something went wrong:', err);
            }
        });
    }
}
