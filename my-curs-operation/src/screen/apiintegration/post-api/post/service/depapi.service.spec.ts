import { TestBed } from '@angular/core/testing';

import { DepapiService } from './depapi.service';

describe('DepapiService', () => {
  let service: DepapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DepapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
