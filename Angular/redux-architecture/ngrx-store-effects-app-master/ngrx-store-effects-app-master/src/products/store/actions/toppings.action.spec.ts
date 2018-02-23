import * as fromToppings from './toppings.action'

describe('Toppings Actions', () => {

    describe('LoadToppingss Actions', () => {
       
        describe('LoadToppings', () => {

            it('should create an action', () => {

                const action = new fromToppings.LoadToppings();

                expect({...action}).toEqual({
                    type: fromToppings.LOAD_TOPPINGS
                })
            })
        });


        describe('LoadToppingsFail', () => {

            it('should create an action', () => {
                const payload = {message: 'error' };
                const action = new fromToppings.LoadToppingsFail(payload);

                expect({...action}).toEqual({
                    type: fromToppings.LOAD_TOPPINGS_FAIL,
                    payload
                })
            })
        });

        describe('LoadToppingsSucess', () => {

            it('should create an action', () => {
                const payload = [
                    {
                        "id": 4,
                        "name": "chili"
                      },
                      {
                        "id": 7,
                        "name": "olive"
                      },
                      {
                        "id": 10,
                        "name": "pepperoni"
                      }
                ];
                const action = new fromToppings.LoadToppingsSuccess(payload);

                expect({...action}).toEqual({
                    type: fromToppings.LOAD_TOPPINGS_SUCCESS,
                    payload
                })
            })
        });

    }

});