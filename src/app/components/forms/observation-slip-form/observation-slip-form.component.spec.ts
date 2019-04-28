import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservationSlipFormComponent } from './observation-slip-form.component';

describe('ObservationSlipFormComponent', () => {
  let component: ObservationSlipFormComponent;
  let fixture: ComponentFixture<ObservationSlipFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObservationSlipFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservationSlipFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
