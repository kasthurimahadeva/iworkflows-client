import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DebugTableComponent } from './debug-table.component';

describe('DebugTableComponent', () => {
  let component: DebugTableComponent;
  let fixture: ComponentFixture<DebugTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DebugTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DebugTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
