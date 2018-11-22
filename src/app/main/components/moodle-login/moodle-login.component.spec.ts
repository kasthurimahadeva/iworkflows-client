import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoodleLoginComponent } from './moodle-login.component';

describe('MoodleLoginComponent', () => {
  let component: MoodleLoginComponent;
  let fixture: ComponentFixture<MoodleLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoodleLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoodleLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
