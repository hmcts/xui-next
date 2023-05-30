import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return false when the user is not logged in', () => {
    expect(service.isUserLoggedIn.value).toBeFalsy()
  })

  it('should return false when the user is not logged in', () => {
    service.checkCredentials('demo', 'demo')
    expect(service.isUserLoggedIn.value).toBeTruthy()
  })
});
