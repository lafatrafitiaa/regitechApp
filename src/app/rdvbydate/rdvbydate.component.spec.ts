import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdvbydateComponent } from './rdvbydate.component';

describe('RdvbydateComponent', () => {
  let component: RdvbydateComponent;
  let fixture: ComponentFixture<RdvbydateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdvbydateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdvbydateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
