import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierRegistrationPageComponent } from './supplier-registration-page.component';

describe('SupplierRegistrationPageComponent', () => {
  let component: SupplierRegistrationPageComponent;
  let fixture: ComponentFixture<SupplierRegistrationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupplierRegistrationPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupplierRegistrationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
