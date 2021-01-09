const redux = require('redux');
const BUY_CAKE = "BUY_CAKE";

// action
function buyCake() {
    return {
        type: BUY_CAKE
    }
}

const initialState = {
    numCakes: 10
};

const reducer = (state, action) => {
    switch (action.type) {
        case BUY_CAKE:
            return {
                ...state,
                numCakes: state.numCakes - 1 // Not mutating state obj
            };
        default:
            return initialState;
    }
};

const store = redux.createStore(reducer);
console.log(store.getState());

const unsubscribe = store.subscribe(() => {console.log("State changed: " + JSON.stringify(store.getState()))});

store.dispatch(buyCake());
unsubscribe();