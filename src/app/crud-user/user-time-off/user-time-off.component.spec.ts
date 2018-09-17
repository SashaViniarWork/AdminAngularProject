import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTimeOffComponent } from './user-time-off.component';

describe('UserTimeOffComponent', () => {
  let component: UserTimeOffComponent;
  let fixture: ComponentFixture<UserTimeOffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserTimeOffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTimeOffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
