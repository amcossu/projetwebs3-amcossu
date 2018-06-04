import { TestBed, inject } from '@angular/core/testing';

import { CandidatureService } from './candidature.service';

describe('CandidatureService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CandidatureService]
    });
  });

  it('should be created', inject([CandidatureService], (service: CandidatureService) => {
    expect(service).toBeTruthy();
  }));
});
