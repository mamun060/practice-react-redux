/* eslint-disable no-undef */
import React from 'react';
import styles from './Counter.module.css'; 
import { connect } from 'react-redux';
import { increment, decrement } from '../services/actions/counterAction';

const Counter = ({increment, decrement, count}) => {
  return (
    <div className={styles.Counterwrap}>
        <h4> Count: {count}</h4>
        <div>
          <button onClick={ ()=> increment(10)}>Increament</button>
          <button onClick={ ()=> decrement(5) }>Decreament</button>
        </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
    count: state.counterReducer.count,
})
 
 
export default connect(mapStateToProps, {increment, decrement})(Counter);