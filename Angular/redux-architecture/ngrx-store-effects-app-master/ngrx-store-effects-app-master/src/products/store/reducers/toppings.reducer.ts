import * as fromToppings from '../actions/toppings.action';
import { Topping } from '../../models/topping.model';
//import { MaptoPizzaEntity } from '../utilities/map.array.object.entity';

export interface ToppingsState {
    entities: {[id: number]: Topping};
    loaded: boolean;
    loading: boolean;
}

export const initialState: ToppingsState = {
    entities: {},
    loaded: false,
    loading: false
};

export function reducer(
    state = initialState,
    action: fromToppings.ToppingsAction
): ToppingsState {
    switch (action.type) {
        case fromToppings.LOAD_TOPPINGS: {
            return {
                ...state,
                loading: true
            };
        } 
        
        case fromToppings.LOAD_TOPPINGS_SUCCESS: {
            const toppings = action.payload;
            //MaptoPizzaEntity(action.payload,state);
            const entities =  toppings.reduce(
                (entities : { [id: number] : Topping }, topping: Topping) => {
                    return {
                        ...entities, // merge the entities into the existent state
                        [topping.id]: topping
                    };
                },
                {
                    ...state.entities
                }
            );

            return {
                ...state,
                loading: false,
                loaded: true,
                entities: entities
            };
        }
        
        case fromToppings.LOAD_TOPPINGS_FAIL: {
            return {
                ...state,
                loading: false,
                loaded: false
            };
        } 
    }

    return state;
}

export const getToppingEntities = (state: ToppingsState) => state.entities;
export const getToppingLoaded = (state: ToppingsState) => state.loaded;
export const getToppingLoading = (state: ToppingsState) => state.loading;