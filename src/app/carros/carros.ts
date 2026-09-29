import { Component, inject } from '@angular/core';
import { CarroDescricaoService } from '../servicos/carro-descricao';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-carros',
  imports: [RouterLink],
  templateUrl: './carros.html',
  styleUrl: './carros.scss',
})
export class Carros {

  private carro_service = inject(CarroDescricaoService);

  carros = this.carro_service.getCarros();

}