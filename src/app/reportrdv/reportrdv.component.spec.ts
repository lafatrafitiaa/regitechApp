import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportrdvComponent } from './reportrdv.component';

describe('ReportrdvComponent', () => {
  let component: ReportrdvComponent;
  let fixture: ComponentFixture<ReportrdvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportrdvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportrdvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
