import { TestBed } from '@angular/core/testing';

import { HomeActivateGuardService } from './home.activate-guard.service';

describe('HomeActivateGuardService', () => {
  let service: HomeActivateGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeActivateGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
