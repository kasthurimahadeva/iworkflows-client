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
                const canvas = viewer.get('canvas');
                // zoom to fit full viewport
                canvas.zoom('fit-viewport');
                canvas.addMarker(taskDefinitionKey, 'highlight');
                // const overlays = viewer.get('overlays');
                // overlays.add(taskDefinitionKey, {
                //         position: {
                //             bottom: 0,
                //             right: 0
                //         },
                //         html: '<div><span matBadge="4" matBadgeOverlap="false">Text with a badge</span></div>'
                //     }
                // );
            } else {
                console.log('something went wrong:', err);
            }
        });


    }
}
