import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastradoComponent } from './cadastrado.component';

describe('CadastradoComponent', () => {
  let component: CadastradoComponent;
  let fixture: ComponentFixture<CadastradoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastradoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
