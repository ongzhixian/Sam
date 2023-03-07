import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierListPageComponent } from './supplier-list-page.component';

describe('SupplierListPageComponent', () => {
  let component: SupplierListPageComponent;
  let fixture: ComponentFixture<SupplierListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupplierListPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupplierListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
