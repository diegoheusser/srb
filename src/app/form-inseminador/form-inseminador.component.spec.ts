import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormInseminadorComponent } from './form-inseminador.component';

describe('FormInseminadorComponent', () => {
  let component: FormInseminadorComponent;
  let fixture: ComponentFixture<FormInseminadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormInseminadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormInseminadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
