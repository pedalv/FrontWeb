import { Pizza } from '../../models/pizza.model';
import { Topping } from '../../models/topping.model';
import { PizzaState } from '../reducers/pizzas.reducer';
import { ToppingsState } from '../reducers/toppings.reducer';

//TODO: refactoring both methods later

export function MaptoPizzaEntity(
    pizzas: Pizza[],
    state: PizzaState,    
) {
    
    const entities =  pizzas.reduce(
        (entities : { [id: number] : Pizza }, pizza: Pizza) => {
          return {
            ...entities, // merge the entities into the existent state
            [pizza.id]: pizza
          };
        },
        {
          ...state.entities
        }
    );

    return entities;
}


export function MaptoToppingEntity(
    toppings: Topping[],
    state: ToppingsState,
) {
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

    return entities;
}