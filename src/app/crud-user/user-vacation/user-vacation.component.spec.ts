import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserVacationComponent } from './user-vacation.component';

describe('UserVacationComponent', () => {
  let component: UserVacationComponent;
  let fixture: ComponentFixture<UserVacationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserVacationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserVacationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
