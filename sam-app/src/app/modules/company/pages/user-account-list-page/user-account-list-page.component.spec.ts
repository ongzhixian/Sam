import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAccountListPageComponent } from './user-account-list-page.component';

describe('UserAccountListPageComponent', () => {
  let component: UserAccountListPageComponent;
  let fixture: ComponentFixture<UserAccountListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserAccountListPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserAccountListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
