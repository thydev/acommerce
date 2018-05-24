import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerNewComponent } from './seller-new.component';

describe('SellerNewComponent', () => {
  let component: SellerNewComponent;
  let fixture: ComponentFixture<SellerNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellerNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
