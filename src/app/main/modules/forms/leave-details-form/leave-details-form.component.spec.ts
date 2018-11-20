import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveDetailsFormComponent } from './leave-details-form.component';

describe('LeaveDetailsFormComponent', () => {
  let component: LeaveDetailsFormComponent;
  let fixture: ComponentFixture<LeaveDetailsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaveDetailsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaveDetailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
