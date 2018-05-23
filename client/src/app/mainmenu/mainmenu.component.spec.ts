import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainmenuComponent } from './mainmenu.component';

describe('MainmenuComponent', () => {
  let component: MainmenuComponent;
  let fixture: ComponentFixture<MainmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainmenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
