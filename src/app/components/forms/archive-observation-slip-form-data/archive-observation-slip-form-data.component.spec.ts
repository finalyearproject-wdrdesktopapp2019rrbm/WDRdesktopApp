import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveObservationSlipFormDataComponent } from './archive-observation-slip-form-data.component';

describe('ArchiveObservationSlipFormDataComponent', () => {
  let component: ArchiveObservationSlipFormDataComponent;
  let fixture: ComponentFixture<ArchiveObservationSlipFormDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchiveObservationSlipFormDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchiveObservationSlipFormDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
