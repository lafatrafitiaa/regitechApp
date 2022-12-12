import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FicherendezvousComponent } from './ficherendezvous.component';

describe('FicherendezvousComponent', () => {
  let component: FicherendezvousComponent;
  let fixture: ComponentFixture<FicherendezvousComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FicherendezvousComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FicherendezvousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
