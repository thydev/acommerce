import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceSearchComponent } from './price-search.component';

describe('PriceSearchComponent', () => {
  let component: PriceSearchComponent;
  let fixture: ComponentFixture<PriceSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriceSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
