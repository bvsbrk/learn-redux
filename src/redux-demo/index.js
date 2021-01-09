const redux = require('redux');
const combineReducers = redux.combineReducers;
const BUY_CAKE = "BUY_CAKE";
const BUY_ICE_CREAM = "BUY_ICE_CREAM";

// action
function buyCake() {
    return {
        type: BUY_CAKE
    }
}

function buyIceCream() {
    return {
        type: BUY_ICE_CREAM
    }
}

const initialCakeState = {
    numCakes: 10
};

const initialIceCreamState = {
    numIceCreams: 20
};

const cakeReducer = (cakeState = initialCakeState, action) => {
    switch (action.type) {
        case BUY_CAKE:
            return {
                ...cakeState,
                numCakes: cakeState.numCakes - 1 // Not mutating state obj
            };
        default:
            return cakeState;
    }
};

const iceCreamReducer = (iceCreamState = initialIceCreamState, action) => {
    switch (action.type) {
        case BUY_ICE_CREAM:
            return {
                ...iceCreamState,
                numIceCreams: iceCreamState.numIceCreams - 1 // Not mutating state obj
            };
        default:
            // This will be called when redux is creating store and when other action types are being called
            return iceCreamState;
    }
};

const rootReducer = combineReducers({
   cake: cakeReducer,
   iceCream: iceCreamReducer
});

const store = redux.createStore(rootReducer);
console.log(store.getState());

const unsubscribe = store.subscribe(() => {console.log("State changed: " + JSON.stringify(store.getState()))});

store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
console.log(store.getState());

unsubscribe();