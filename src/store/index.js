import { createStore } from 'redux'

const counterReducer = (state = {counter: 0,showCounter : true}, action) => {
  if(action.type === 'increment')
  return {
    counter : state.counter + 1,
    showCounter: state.showCounter
  } 

  if(action.type === 'Increase')
  return {
    counter : state.counter + action.amount.action,
    showCounter: state.showCounter
  } 

  if(action.type === 'toggle')
  return {
    counter : state.counter ,
    showCounter: !state.showCounter
  } 

  return state;
}

const store = createStore(counterReducer);

export default store;