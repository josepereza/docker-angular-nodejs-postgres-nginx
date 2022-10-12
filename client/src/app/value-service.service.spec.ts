import { TestBed } from '@angular/core/testing';

import { ValueServiceService } from './value-service.service';

describe('ValueServiceService', () => {
  let service: ValueServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValueServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
