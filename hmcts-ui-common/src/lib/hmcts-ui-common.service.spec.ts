import { TestBed } from '@angular/core/testing';

import { HmctsUiCommonService } from './hmcts-ui-common.service';

describe('HmctsUiCommonService', () => {
  let service: HmctsUiCommonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HmctsUiCommonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
