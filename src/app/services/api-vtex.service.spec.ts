import { TestBed } from '@angular/core/testing';

import { ApiVtexService } from './api-vtex.service';

describe('ApiVtexService', () => {
  let service: ApiVtexService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiVtexService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
