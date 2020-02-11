import { TestBed } from '@angular/core/testing';

import { RendezvousService } from './rendezvous.service';

describe('RendezvousService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RendezvousService = TestBed.get(RendezvousService);
    expect(service).toBeTruthy();
  });
});
