import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierDetailPageComponent } from './supplier-detail-page.component';

describe('SupplierDetailPageComponent', () => {
  let component: SupplierDetailPageComponent;
  let fixture: ComponentFixture<SupplierDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupplierDetailPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupplierDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
