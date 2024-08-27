import { TestBed } from '@angular/core/testing';

import { BooksManagementApiserviceService } from './books-management-apiservice.service';

describe('BooksManagementApiserviceService', () => {
  let service: BooksManagementApiserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BooksManagementApiserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
