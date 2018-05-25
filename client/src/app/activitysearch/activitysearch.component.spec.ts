import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitysearchComponent } from './activitysearch.component';

describe('ActivitysearchComponent', () => {
  let component: ActivitysearchComponent;
  let fixture: ComponentFixture<ActivitysearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivitysearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivitysearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
