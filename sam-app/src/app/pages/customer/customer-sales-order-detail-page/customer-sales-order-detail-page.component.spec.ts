import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerSalesOrderDetailPageComponent } from './customer-sales-order-detail-page.component';

describe('CustomerSalesOrderDetailPageComponent', () => {
  let component: CustomerSalesOrderDetailPageComponent;
  let fixture: ComponentFixture<CustomerSalesOrderDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerSalesOrderDetailPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerSalesOrderDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
