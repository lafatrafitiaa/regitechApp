import { TestBed } from '@angular/core/testing';

import { MicoService } from './mico.service';

describe('MicoService', () => {
  let service: MicoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MicoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
