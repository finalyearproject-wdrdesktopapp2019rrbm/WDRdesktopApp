import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservationSlipComponent } from './observation-slip.component';

describe('ObservationSlipComponent', () => {
  let component: ObservationSlipComponent;
  let fixture: ComponentFixture<ObservationSlipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObservationSlipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservationSlipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
