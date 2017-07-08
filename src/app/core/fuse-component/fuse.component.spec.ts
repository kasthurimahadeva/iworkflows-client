import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuseComponent } from './my-new-component.component';

describe('FuseComponent', () => {
  let component: FuseComponent;
  let fixture: ComponentFixture<FuseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
