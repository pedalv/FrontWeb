import { ActionReducerMap, createSelector, createFeatureSelector } from '@ngrx/store';

import * as fromPizzas from './pizzas.reducer';

export interface ProductsState {
    pizzas: fromPizzas.PizzaState
}

export const reducers : ActionReducerMap<ProductsState> = {
    pizzas: fromPizzas.reducer
};

export const getproductState = createFeatureSelector<ProductsState>(
    'products'
);

/*
const state = {
    products : {
        pizzas :{
            data: [],
            loaded: false,
            loading: false
        }
    }
}
*/

// pizza state
export const getPizzaState =  createSelector(
    getproductState,
    (state: ProductsState) => state.pizzas
);

export const getPizzasEntities =  createSelector(
    getPizzaState,
    fromPizzas.getPizzasEntities
);

export const getAllPizzas = createSelector(
    getPizzasEntities,
    (entities) => {
        // convert object to array - [1,2,3].map()
        return Object.keys(entities)
            .map( id => entities[parseInt(id,10)] );
    }
)

export const getAllPizzaLoaded =  createSelector(
    getPizzaState,
    fromPizzas.getPizzasLoaded
);

export const getPizzasLoading =  createSelector(
    getPizzaState,
    fromPizzas.getPizzasLoading
);