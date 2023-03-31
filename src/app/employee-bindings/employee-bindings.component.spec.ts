import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeBindingsComponent } from './employee-bindings.component';

describe('EmployeeBindingsComponent', () => {
  let component: EmployeeBindingsComponent;
  let fixture: ComponentFixture<EmployeeBindingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeBindingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeBindingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
