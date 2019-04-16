import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservationSlipReportComponent } from './observation-slip-report.component';

describe('ObservationSlipReportComponent', () => {
  let component: ObservationSlipReportComponent;
  let fixture: ComponentFixture<ObservationSlipReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObservationSlipReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservationSlipReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
