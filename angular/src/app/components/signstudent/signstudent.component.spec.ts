import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignstudentComponent } from './signstudent.component';

describe('SignstudentComponent', () => {
  let component: SignstudentComponent;
  let fixture: ComponentFixture<SignstudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignstudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignstudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
