import { TestBed } from '@angular/core/testing';

import { BalancoService } from './balanco.service';

describe('BalancoService', () => {
  let service: BalancoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BalancoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
