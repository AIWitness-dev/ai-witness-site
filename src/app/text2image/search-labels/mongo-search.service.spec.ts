import { TestBed } from '@angular/core/testing';

import { MongoSearchService } from './mongo-search.service';

describe('MongoSearchService', () => {
  let service: MongoSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MongoSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
