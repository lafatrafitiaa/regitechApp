import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulairerdvComponent } from './formulairerdv.component';

describe('FormulairerdvComponent', () => {
  let component: FormulairerdvComponent;
  let fixture: ComponentFixture<FormulairerdvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulairerdvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulairerdvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
