import { createSelector } from '@ngrx/store';

import * as fromRoot from '../../../app/store';
import * as fromFeature from '../reducers';
import * as fromPizzas from '../reducers/pizzas.reducer';
import * as fromToppings from './toppings.selectors';

import { Pizza } from '../../models/pizza.model';

export const getPizzaState =  createSelector(
    fromFeature.getproductState,
    (state: fromFeature.ProductsState) => state.pizzas
);

export const getPizzasEntities =  createSelector(
    getPizzaState,
    fromPizzas.getPizzasEntities
);

export const getSelectedPizza = createSelector(
    getPizzasEntities,
    fromRoot.getRouterState,
    (entities, router): Pizza => {
        console.log("problems");
        //console.log(router);
        //console.log(router.state);
        //console.log(router.state.params);


      return /*router &&*/ router.state && entities[router.state.params.pizzaId];
    }
  );

export const getPizzaVisualised = createSelector(
    getSelectedPizza,
    fromToppings.getToppingsEntities,                 
    fromToppings.getSelectedToppings,
    (pizza, toppingEntities, selectedToppings) => {
        const toppings = selectedToppings.map(id => toppingEntities[id]);
        return { 
            ...pizza, 
            toppings 
        };
    }
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