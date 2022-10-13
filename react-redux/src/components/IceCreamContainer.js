import React from 'react';
import { buyIceCream } from '../redux';
import { connect } from 'react-redux';

const IceCreamContainer = (props) => {
    return (
        <div>
            <h4>Number Of IceCreams - {props.numOfIceCream}</h4>
            <button onClick={props.buyIceCream}>Buy IceCreams</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        numOfIceCream: state.iceCream.numOfIceCream
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyIceCream: () => dispatch(buyIceCream())
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (IceCreamContainer)