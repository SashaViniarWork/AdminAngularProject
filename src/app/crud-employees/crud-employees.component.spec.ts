import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudEmployeesComponent } from './crud-employees.component';

describe('CrudEmployeesComponent', () => {
  let component: CrudEmployeesComponent;
  let fixture: ComponentFixture<CrudEmployeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudEmployeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
