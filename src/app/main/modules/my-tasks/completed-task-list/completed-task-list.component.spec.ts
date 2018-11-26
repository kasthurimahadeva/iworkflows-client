import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedTaskListComponent } from './completed-task-list.component';

describe('CompletedTaskListComponent', () => {
  let component: CompletedTaskListComponent;
  let fixture: ComponentFixture<CompletedTaskListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompletedTaskListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletedTaskListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
