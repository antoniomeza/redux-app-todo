import { createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.models';
import { crear, toggle, editar, borrar, toggleAll, limpiarCompletadas } from './todo.actions';

export const estadoInicial: Todo[] = [
    new Todo('Salvar al uno'),
    new Todo('Salvar al dos'),
    new Todo('Salvar al tres'),
    new Todo('Salvar al cuatro'),
];

export const todoReducer = createReducer(
    estadoInicial,
  on( crear , ( state, { texto } ) => [ ...state, new Todo( texto ) ] ),

  on( toggle , ( state, { id }) => {
    return state.map( todo => {
      if ( todo.id === id ) {
          return {
            ...todo,
            completado: !todo.completado
          }
      } else {
        return todo
      }
    })
  }),

  on( editar , ( state, { id, texto }) => {
    return state.map( todo => {
      if ( todo.id === id ) {
          return {
            ...todo,
            texto: texto
          }
      } else {
        return todo
      }
    })
  }),

  on( borrar , ( state, { id } ) => state.filter(
    todo => todo.id !== id 
  ) ),

  on( toggleAll , ( state, { completado }) => {
    return state.map( todo => {
      return {
        ...todo,
        completado: completado
      }
    })
  }),

  on( limpiarCompletadas , ( state ) => state.filter(
    todo => !todo.completado
  ) ),

);
