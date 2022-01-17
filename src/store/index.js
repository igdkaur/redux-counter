import { createStore } from 'redux'

const counterReducer = (state = {count: 0}, action) => {
  if(action.type === 'increment')
  return {
    count : state.count + 1
  }
  if(action.type === 'decrement')
  return {
    count : state.count - 1
  }
  return state;
}

const store = createStore(counterReducer);

store.dispatch({type: 'increment'})
store.dispatch({type: 'decrement'})