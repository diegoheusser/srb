import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpressoComponent } from './impresso.component';

describe('ImpressoComponent', () => {
  let component: ImpressoComponent;
  let fixture: ComponentFixture<ImpressoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImpressoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImpressoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
