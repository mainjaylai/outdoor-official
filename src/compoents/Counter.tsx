// src/components/Counter.jsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../store/mainSlice';

const Counter = () => {
  const count = useSelector((state: any) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default Counter;
