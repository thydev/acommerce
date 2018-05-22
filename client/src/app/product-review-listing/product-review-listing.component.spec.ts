import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductReviewListingComponent } from './product-review-listing.component';

describe('ProductReviewListingComponent', () => {
  let component: ProductReviewListingComponent;
  let fixture: ComponentFixture<ProductReviewListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductReviewListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductReviewListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
