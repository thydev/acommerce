import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacialRecogLoginComponent } from './facial-recog-login.component';

describe('FacialRecogLoginComponent', () => {
  let component: FacialRecogLoginComponent;
  let fixture: ComponentFixture<FacialRecogLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacialRecogLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacialRecogLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
