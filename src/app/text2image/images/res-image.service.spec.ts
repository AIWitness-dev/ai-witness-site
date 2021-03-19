import { TestBed } from '@angular/core/testing';

import { ResImageService } from './res-image.service';

describe('ResImageService', () => {
  let service: ResImageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResImageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
