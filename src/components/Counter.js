import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();
  
  const incrementHandler = () => {
    dispatch({type : 'increment'})
  }

  const IncbyFiveHandler = () => {
    dispatch({type : 'Increase', amount : 5})
  }

  const decrementHandler = () => {
    dispatch({type : 'decrement'})
  }
  

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
      <button onClick = {incrementHandler}>Increment</button>
      <button onClick = {IncbyFiveHandler}>Inc By 5</button>
      <button onClick={decrementHandler}>Decrement</button>
    </main>
  );
};

export default Counter;
