import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportInseminacaoComponent } from './report-inseminacao.component';

describe('ReportInseminacaoComponent', () => {
  let component: ReportInseminacaoComponent;
  let fixture: ComponentFixture<ReportInseminacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportInseminacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportInseminacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
