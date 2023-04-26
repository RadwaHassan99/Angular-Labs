import { TestBed } from '@angular/core/testing';

import { Lab4Service } from './lab4.service';

describe('Lab4Service', () => {
  let service: Lab4Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Lab4Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
