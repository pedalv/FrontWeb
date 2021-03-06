import * as fromPizzas from '../actions/pizzas.action';
import { Pizza } from '../../models/pizza.model';
//import { MaptoPizzaEntity } from '../utilities/map.array.object.entity';

export interface PizzaState {
  entities: {[id: number ]: Pizza};
  loaded: boolean;
  loading: boolean;
}

export const initialState: PizzaState = {
  entities: {},
  loaded: false,
  loading: false,
};

export function reducer(
  state = initialState,
  action: fromPizzas.PizzasAction
): PizzaState {
  switch (action.type) {
    case fromPizzas.LOAD_PIZZAS: {
      return {
        ...state,
        loading: true,
      };
    }

    case fromPizzas.LOAD_PIZZAS_SUCCESS: {
      console.log(action.payload);

      //const data = action.payload;
      /*
      we have array of pizza:
      [ {id: 1}, {id: 2}]
      we want object of pizza:
      const pizza: any = {

          1. {
          id: 1,
          name: 'Pizza',
          toopings: []
        }

      }
      const id = 1;
      pizza[id]
      */
     
     const pizzas = action.payload;
     //MaptoPizzaEntity(action.payload,state);
     const entities =  pizzas.reduce(
       (entities : { [id: number] : Pizza }, pizza: Pizza) => {
         return {
           ...entities, // merge the entities into the existent state
           [pizza.id]: pizza
         };
       },
       {
         ...state.entities
       });

      return {
        ...state,
        loading: false,
        loaded: true,
        entities: entities
      };
    }

    case fromPizzas.LOAD_PIZZAS_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false,
      };
    }

    case fromPizzas.UPDATE_PIZZA_SUCCESS: 
    case fromPizzas.CREATE_PIZZA_SUCCESS: {
      const pizza = action.payload;
      const entities = {
        ...state.entities, // merge all exitent entities
        [pizza.id]: pizza // add the new entitie
      };

      return {
        ...state,
        entities
      };
    }

    case fromPizzas.REMOVE_PIZZA_SUCCESS: {
      const pizza  = action.payload;
      const { 
        [pizza.id]: removed, 
        ...entities
       } = state.entities // destroyer element we do not want
       console.log("removed");
       console.log(removed);
      return {
        ...state,
        entities
      }
    }

    
  }

  return state;
}

export const getPizzasEntities = (state: PizzaState) => state.entities;
export const getPizzasLoading = (state: PizzaState) => state.loading;
export const getPizzasLoaded = (state: PizzaState) => state.loaded;
