import { TestBed, inject } from '@angular/core/testing';

import { ResolveMissionService } from './resolve-mission.service';

describe('ResolveMissionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResolveMissionService]
    });
  });

  it('should be created', inject([ResolveMissionService], (service: ResolveMissionService) => {
    expect(service).toBeTruthy();
  }));
});
