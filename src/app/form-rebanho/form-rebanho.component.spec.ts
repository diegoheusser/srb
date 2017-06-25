import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRebanhoComponent } from './form-rebanho.component';

describe('FormRebanhoComponent', () => {
  let component: FormRebanhoComponent;
  let fixture: ComponentFixture<FormRebanhoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormRebanhoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormRebanhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
