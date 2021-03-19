import { TestBed } from '@angular/core/testing';

import { FeatureSearchService } from './feature-search.service';

describe('FeatureSearchService', () => {
  let service: FeatureSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeatureSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
