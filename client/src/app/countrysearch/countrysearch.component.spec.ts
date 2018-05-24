import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountrysearchComponent } from './countrysearch.component';

describe('CountrysearchComponent', () => {
  let component: CountrysearchComponent;
  let fixture: ComponentFixture<CountrysearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountrysearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountrysearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
