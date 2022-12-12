import { TestBed } from '@angular/core/testing';

import { LaravelserviceService } from './laravelservice.service';

describe('LaravelserviceService', () => {
  let service: LaravelserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LaravelserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
