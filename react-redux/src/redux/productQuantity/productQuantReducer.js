import { DECREMENT, INCRMENT } from "./productQuantTypes";

const initialState = {
    quantity: 0
}

const quantityReducer = (state = initialState, action) => {
    switch(action.type) {
        case INCRMENT: return {
            ...state,
            quantity: state.quantity + 1
        }
        case DECREMENT: return {
            ...state,
            quantity: state.quantity - 1
        }
        default: return state
    }
}

export default quantityReducer