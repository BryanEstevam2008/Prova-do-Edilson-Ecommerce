import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Carros } from './carros/carros';
import { CarroDescricao } from './carro-descricao/carro-descricao';
import { Contato } from './contato/contato';

export const routes: Routes = [
    { path: 'home', component: Home },
    { path: 'carros', component: Carros },
    { path: 'carro-descricao/:id', component: CarroDescricao },
    { path: 'contato', component: Contato }
];