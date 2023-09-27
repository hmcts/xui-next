import { TestBed } from '@angular/core/testing';

import { DynamicRouteService } from './dynamic-route.service';

describe('DynamicRouteService', () => {
  let service: DynamicRouteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DynamicRouteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
