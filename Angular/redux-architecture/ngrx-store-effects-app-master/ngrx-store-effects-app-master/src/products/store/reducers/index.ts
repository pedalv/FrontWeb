import { 
    ActionReducerMap, 
    createFeatureSelector 
} from '@ngrx/store';

import * as fromPizzas from './pizzas.reducer';
import * as fromToppings from './toppings.reducer';


export interface ProductsState {
    pizzas: fromPizzas.PizzaState;
    toppings: fromToppings.ToppingsState;
}

export const reducers : ActionReducerMap<ProductsState> = {
    pizzas: fromPizzas.reducer,
    toppings: fromToppings.reducer
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