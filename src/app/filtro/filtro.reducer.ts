import { createReducer, on } from '@ngrx/store';
import { setFiltro, filtrosValidos } from './filtro.actions';

export const estadoInicial: filtrosValidos = 'todos' as filtrosValidos

export const filtroReducer = createReducer(
    estadoInicial,
  on( setFiltro , ( state , {filtro} ) => filtro ),
)
