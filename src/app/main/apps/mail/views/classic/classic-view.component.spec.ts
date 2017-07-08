import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassicViewComponent } from './classic-view.component';

describe('ClassicViewComponent', () => {
  let component: ClassicViewComponent;
  let fixture: ComponentFixture<ClassicViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassicViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassicViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
