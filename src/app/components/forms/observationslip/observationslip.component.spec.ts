import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservationslipComponent } from './observationslip.component';

describe('ObservationslipComponent', () => {
  let component: ObservationslipComponent;
  let fixture: ComponentFixture<ObservationslipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObservationslipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservationslipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
