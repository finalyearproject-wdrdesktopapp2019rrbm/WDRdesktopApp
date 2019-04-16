import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UsertestComponent } from './usertest.component';

describe('UsertestComponent', () => {
  let component: UsertestComponent;
  let fixture: ComponentFixture<UsertestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsertestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsertestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
