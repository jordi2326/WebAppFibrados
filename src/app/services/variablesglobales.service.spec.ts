import { TestBed } from '@angular/core/testing';

import { VariablesglobalesService } from './variablesglobales.service';

describe('VariablesglobalesService', () => {
  let service: VariablesglobalesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VariablesglobalesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
