import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveObservationslipComponent } from './archive-observationslip.component';

describe('ArchiveObservationslipComponent', () => {
  let component: ArchiveObservationslipComponent;
  let fixture: ComponentFixture<ArchiveObservationslipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchiveObservationslipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchiveObservationslipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
