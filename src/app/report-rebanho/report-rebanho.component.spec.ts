import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportRebanhoComponent } from './report-rebanho.component';

describe('ReportRebanhoComponent', () => {
  let component: ReportRebanhoComponent;
  let fixture: ComponentFixture<ReportRebanhoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportRebanhoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportRebanhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
