import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenUnderConstructionComponent } from './screen-under-construction.component';

describe('ScreenUnderConstructionComponent', () => {
  let component: ScreenUnderConstructionComponent;
  let fixture: ComponentFixture<ScreenUnderConstructionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScreenUnderConstructionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenUnderConstructionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
