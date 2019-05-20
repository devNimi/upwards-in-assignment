import { TestBed } from '@angular/core/testing';

import { LoanApplyService } from './loan-apply.service';

describe('LoanApplyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoanApplyService = TestBed.get(LoanApplyService);
    expect(service).toBeTruthy();
  });
});
