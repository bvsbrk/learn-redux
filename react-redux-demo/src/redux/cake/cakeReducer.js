import {BUY_CAKE} from "./cakeTypes";

const initialState = {numCakes: 10};

export const cakeReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_CAKE:
            return {
                ...state,
                numCakes: state.numCakes - 1
            };
        default:
            return state;
    }
};