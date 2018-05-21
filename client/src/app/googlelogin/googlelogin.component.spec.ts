import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleloginComponent } from './googlelogin.component';

describe('GoogleloginComponent', () => {
  let component: GoogleloginComponent;
  let fixture: ComponentFixture<GoogleloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoogleloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
