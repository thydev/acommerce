import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacialRecogComponent } from './facial-recog.component';

describe('FacialRecogComponent', () => {
  let component: FacialRecogComponent;
  let fixture: ComponentFixture<FacialRecogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacialRecogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacialRecogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
