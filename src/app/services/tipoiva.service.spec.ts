import { TestBed } from '@angular/core/testing';

import { TipoivaService } from './tipoiva.service';

describe('TipoivaService', () => {
  let service: TipoivaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipoivaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
