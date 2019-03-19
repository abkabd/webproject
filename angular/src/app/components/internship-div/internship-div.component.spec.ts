import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternshipDivComponent } from './internship-div.component';

describe('InternshipDivComponent', () => {
  let component: InternshipDivComponent;
  let fixture: ComponentFixture<InternshipDivComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternshipDivComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternshipDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
