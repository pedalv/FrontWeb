import { createSelector } from '@ngrx/store';

import * as fromRoot from '../../../app/store';
import * as fromFeature from '../reducers';
import * as fromToppings from '../reducers/toppings.reducer';

/*
this is the data structured
{
    product: {
        pizzas: {},
        toppings: {
            entities: {}
        }
    }
}
*/

export const getToppingsState = createSelector(
    fromFeature.getProductsState,
    (state: fromFeature.ProductsState) => state.toppings
);

export const getToppingsEntities = createSelector(
    getToppingsState,
    fromToppings.getToppingsEntities
);

export const getSelectedToppings = createSelector(
    getToppingsState,
    fromToppings.getSelectedToppings
);

export const getAllToppings = createSelector(
    getToppingsEntities,
    entities => {
        return Object.keys(entities)
            .map( id => entities[parseInt(id,10)] );
    }
);

export const getToppingsLoaded = createSelector(
    getToppingsState,
    fromToppings.getToppingsLoading
);
