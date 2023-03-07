import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierPurchaseOrderListPageComponent } from './supplier-purchase-order-list-page.component';

describe('SupplierPurchaseOrderListPageComponent', () => {
  let component: SupplierPurchaseOrderListPageComponent;
  let fixture: ComponentFixture<SupplierPurchaseOrderListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupplierPurchaseOrderListPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupplierPurchaseOrderListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
