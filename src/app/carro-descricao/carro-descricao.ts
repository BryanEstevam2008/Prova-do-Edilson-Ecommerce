import { Component, Input, OnInit, inject } from '@angular/core';
import { CarroDescricaoService } from '../servicos/carro-descricao';

@Component({
  selector: 'app-carro-descricao',
  imports: [],
  templateUrl: './carro-descricao.html',
  styleUrl: './carro-descricao.scss',
})
export class CarroDescricao implements OnInit {

  @Input() id!: string;

  private carro_service = inject(CarroDescricaoService);

  carro: any;

  ngOnInit() {

    if (this.id) {

      const id: number = Number(this.id);

      this.carro = this.carro_service.getCarroPorId(id);

    }

  }

  voltar(event: Event) {

    event.preventDefault();

    window.history.back();

  }

}