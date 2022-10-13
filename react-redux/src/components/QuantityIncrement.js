import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increaseQuantity, decreaseQuantity } from '../redux';

const QuantityIncrement = () => {
    const quantityIncrement = useSelector(state => state.quantities.quantity);
    const dispatch = useDispatch();
    return (
        <div>
            <p>Total Item - {quantityIncrement}</p>
            <div className='quantity'>
                <button onClick={() => dispatch(increaseQuantity())}>+</button>
                Quantity
                <button onClick={() => dispatch(decreaseQuantity())}>-</button>
            </div>
            
        </div>
    )
}

export default QuantityIncrement