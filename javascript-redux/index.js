const redux = require('redux');
const reduxLogger = require('redux-logger');

const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware; //Middleware
const logger = reduxLogger.createLogger();

const BUY_CAKE = "BUY_CAKE"
const BUY_ICECREAM = "BUY_ICECREAM"

//Action creators
function buyCake() {
    return {
        type: BUY_CAKE,
        info: "First redux action"
    }
}

function buyIceCream() {
    return {
        type: BUY_ICECREAM,
        info: "Second redux action"
    }
}

// We can declare state together or seperately

// const initialState = {
//     numOfCakes: 10,
//     numOfIceCreams: 20
// }

const initialCakeState = {
    numOfCakes: 10
}

const initialIceCreamState = {
    numOfIceCreams: 10
}

//Reducer(can be created combined or seperately)

// const reducer = (state = initialState, action) => {
//     switch(action.type) {
//         case BUY_CAKE: return {
//             ...state,
//             numOfCakes: state.numOfCakes - 1
//         }

//         case BUY_ICECREAM: return {
//             ...state,
//             numOfIceCreams: state.numOfIceCreams - 1
//         }

//         default: return state
//     }
// }

const cakeReducer = (state = initialCakeState, action) => {
    switch(action.type) {
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        }

        default: return state
    }
}

const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch(action.type) {
        case BUY_ICECREAM: return {
            ...state,
            numOfIceCreams: state.numOfIceCreams - 1
        }

        default: return state
    }
}

//Redux Store 
const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})
const store = createStore(rootReducer, applyMiddleware(logger));
//const store = createStore(reducer);
console.log('Initial State', store.getState());
const unsubscribe = store.subscribe(() => {});
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
unsubscribe();