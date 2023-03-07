import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerSalesOrderListPageComponent } from './customer-sales-order-list-page.component';

describe('CustomerSalesOrderListPageComponent', () => {
  let component: CustomerSalesOrderListPageComponent;
  let fixture: ComponentFixture<CustomerSalesOrderListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerSalesOrderListPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerSalesOrderListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
