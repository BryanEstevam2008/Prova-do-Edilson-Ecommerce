import { TestBed } from '@angular/core/testing';
import { CarroDescricao } from './carro-descricao';

describe('CarroDescricao', () => {
  let service: CarroDescricao;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarroDescricao);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
