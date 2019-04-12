import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchivemonthlyrainfallformreportdataComponent } from './archivemonthlyrainfallformreportdata.component';

describe('ArchivemonthlyrainfallformreportdataComponent', () => {
  let component: ArchivemonthlyrainfallformreportdataComponent;
  let fixture: ComponentFixture<ArchivemonthlyrainfallformreportdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchivemonthlyrainfallformreportdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchivemonthlyrainfallformreportdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
