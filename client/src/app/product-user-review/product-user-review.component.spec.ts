import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductUserReviewComponent } from './product-user-review.component';

describe('ProductUserReviewComponent', () => {
  let component: ProductUserReviewComponent;
  let fixture: ComponentFixture<ProductUserReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductUserReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductUserReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
