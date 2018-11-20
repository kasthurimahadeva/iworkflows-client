import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDetailsFormComponent } from './employee-details-form.component';

describe('EmployeeDetailsFormComponent', () => {
  let component: EmployeeDetailsFormComponent;
  let fixture: ComponentFixture<EmployeeDetailsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeDetailsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeDetailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
