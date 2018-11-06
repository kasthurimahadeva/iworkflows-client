import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CamundaTaskComponent } from './camunda-task.component';

describe('CamundaTaskComponent', () => {
  let component: CamundaTaskComponent;
  let fixture: ComponentFixture<CamundaTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CamundaTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CamundaTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
