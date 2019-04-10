import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchivedekadalformreportdataComponent } from './archivedekadalformreportdata.component';

describe('ArchivedekadalformreportdataComponent', () => {
  let component: ArchivedekadalformreportdataComponent;
  let fixture: ComponentFixture<ArchivedekadalformreportdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchivedekadalformreportdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchivedekadalformreportdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
