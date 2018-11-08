import {AutofillMonitor} from '@angular/cdk/text-field';
import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';

/** @title Monitoring autofill state with AutofillMonitor */
@Component({
  selector: 'text-field-autofill-monitor-example',
  templateUrl: './text-field-autofill-monitor-example.html',
  styleUrls: ['./text-field-autofill-monitor-example.css'],
})
export class TextFieldAutofillMonitorExample implements OnDestroy, OnInit {
  @ViewChild('first', {read: ElementRef}) employeeId: ElementRef<HTMLElement>;
  @ViewChild('last', {read: ElementRef}) employeeName: ElementRef<HTMLElement>;
  emplyeeIDAutofilled: boolean;
  employeeNameAutofilled: boolean;

  constructor(private autofill: AutofillMonitor) {}

  ngOnInit() {
    this.autofill.monitor(this.employeeId)
        .subscribe(e => this.emplyeeIDAutofilled = e.isAutofilled);
    this.autofill.monitor(this.employeeName)
        .subscribe(e => this.employeeNameAutofilled = e.isAutofilled);
  }

  ngOnDestroy() {
    this.autofill.stopMonitoring(this.employeeId);
    this.autofill.stopMonitoring(this.employeeName);
  }
}
