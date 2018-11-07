/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CamundaTaskService } from './camunda-task.service';

describe('Service: CamundaTask', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CamundaTaskService]
    });
  });

  it('should ...', inject([CamundaTaskService], (service: CamundaTaskService) => {
    expect(service).toBeTruthy();
  }));
});
