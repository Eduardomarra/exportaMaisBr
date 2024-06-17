import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PercentSaleComponent } from './percent-sale.component';

describe('PercentSaleComponent', () => {
  let component: PercentSaleComponent;
  let fixture: ComponentFixture<PercentSaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PercentSaleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PercentSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
