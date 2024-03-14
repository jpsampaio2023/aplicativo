import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayDiscountComponent } from './today-discount.component';

describe('TodayDiscountComponent', () => {
  let component: TodayDiscountComponent;
  let fixture: ComponentFixture<TodayDiscountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodayDiscountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodayDiscountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
