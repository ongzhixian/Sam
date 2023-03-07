import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierPurchaseOrderDetailPageComponent } from './supplier-purchase-order-detail-page.component';

describe('SupplierPurchaseOrderDetailPageComponent', () => {
  let component: SupplierPurchaseOrderDetailPageComponent;
  let fixture: ComponentFixture<SupplierPurchaseOrderDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupplierPurchaseOrderDetailPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupplierPurchaseOrderDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
