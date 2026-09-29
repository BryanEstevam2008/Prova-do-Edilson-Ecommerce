import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CarroDescricao } from './carro-descricao';

describe('CarroDescricao', () => {
  let component: CarroDescricao;
  let fixture: ComponentFixture<CarroDescricao>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarroDescricao],
    }).compileComponents();

    fixture = TestBed.createComponent(CarroDescricao);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
