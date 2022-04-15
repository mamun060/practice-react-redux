import React from 'react';
import { increment, decrement } from '../services/actions/counterAction';
import {useSelector, useDispatch} from 'react-redux';

const CounterThree = () => {
    const count = useSelector(state => state.counterReducer.count)
    const dispatchdata = useDispatch()
    return (
        <div>
            <h4> Count: {count} </h4>
            <div>
                <button onClick={ ()=> dispatchdata(increment(20))}>Increament</button>
                <button onClick={ ()=> dispatchdata(decrement(10)) }>Decreament</button>
            </div>
    </div>
    );
}
 
export default CounterThree;