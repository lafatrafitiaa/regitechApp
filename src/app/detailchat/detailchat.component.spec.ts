import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailchatComponent } from './detailchat.component';

describe('DetailchatComponent', () => {
  let component: DetailchatComponent;
  let fixture: ComponentFixture<DetailchatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailchatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailchatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
