import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class CarroDescricaoService {

    carros = [
        {
            id: 1,
            nome: 'Volkswagen Golf MK4',
            preco: 35000,
            descricao: 'Golf MK4 2006. Completo com teto solar.',
            imagem: '4f354bac-1c00-4064-854f-0436a78ea0b6.png'
        },
        {
            id: 2,
            nome: 'Chevrolet Cruze LTZ',
            preco: 56000 ,
            descricao: 'Cruze LTZ 2014. Completo com teto solar, socado no chão.',
            imagem: '11d8723a-90e6-4ef5-a842-5a85ad7bf59c.png'
        },
        {
            id: 3,
            nome: 'Yamaha T115 Crypton ED',
            preco: 7860,
            descricao: 'Crypton ED 2012. azul, completa, com 2 pneus novos. FILÉ!',
            imagem: 'b0b2274a-35cd-435f-a897-cf478450db89.png'
        }
    ];
    getCarros(): any[] {
        return this.carros;
    }
    getCarroPorId(id: number): any {
        return this.carros.find(carro => carro.id === id);
    }
}