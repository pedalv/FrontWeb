import { 
    ActivatedRouteSnapshot, 
    RouterStateSnapshot, 
    Params } from '@angular/router';

import { ActionReducerMap, createFeatureSelector } from '@ngrx/store'
import * as fromRouter from '@ngrx/router-store';

export interface RouterStateUrl {
    url: string;
    queryParams: Params;
    params: Params;
}

// specification from Angular 
export interface State {
    routerReducer: fromRouter.RouterReducerState<RouterStateUrl>
}

export const reducers : ActionReducerMap<State> = {
    routerReducer: fromRouter.routerReducer
};

export const getRouterState = createFeatureSelector<
    fromRouter.RouterReducerState<RouterStateUrl>>(
        'routerReduce'
);

// RouterStateSnapshot extends Tree<ActivatedRouteSnapshot> where is located all params
export class CustomSerializer 
    implements fromRouter.RouterStateSerializer<RouterStateUrl>{
    serialize(routerState: RouterStateSnapshot): RouterStateUrl {
        const { url } = routerState; // <=> const url = routerState.url from es6
        const { queryParams } = routerState.root;

        let state: ActivatedRouteSnapshot = routerState.root;
        while(state.firstChild) {
            // here is angular router (not ngrx router)
            state = state.firstChild;
        }
        const { params } = state ;

        return { url, queryParams, params };
    }
}