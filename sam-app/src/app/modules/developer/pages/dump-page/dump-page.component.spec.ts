import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DumpPageComponent } from './dump-page.component';

describe('DumpPageComponent', () => {
  let component: DumpPageComponent;
  let fixture: ComponentFixture<DumpPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DumpPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DumpPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
