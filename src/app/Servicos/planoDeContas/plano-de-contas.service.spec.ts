import { TestBed } from '@angular/core/testing';

import { PlanoDeContasService } from './plano-de-contas.service';

describe('PlanoDeContasService', () => {
  let service: PlanoDeContasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlanoDeContasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
