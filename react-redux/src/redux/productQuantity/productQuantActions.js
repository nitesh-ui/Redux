import {INCRMENT} from './productQuantTypes';
import { DECREMENT } from './productQuantTypes';

export const increaseQuantity = () => {
    return {
        type: INCRMENT
    }
}

export const decreaseQuantity = () => {
    return {
        type: DECREMENT
    }
}