import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyRainfallReportComponent } from './monthly-rainfall-report.component';

describe('MonthlyRainfallReportComponent', () => {
  let component: MonthlyRainfallReportComponent;
  let fixture: ComponentFixture<MonthlyRainfallReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthlyRainfallReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlyRainfallReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
