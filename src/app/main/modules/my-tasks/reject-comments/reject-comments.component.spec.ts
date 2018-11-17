import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RejectCommentsComponent } from './reject-comments.component';

describe('RejectCommentsComponent', () => {
  let component: RejectCommentsComponent;
  let fixture: ComponentFixture<RejectCommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RejectCommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RejectCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
