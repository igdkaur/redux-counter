import { createStore } from 'redux'
import { createSlice,configureStore } from '@reduxjs/toolkit'


  const counterSlice = createSlice ({
  name : 'counter',
  initialState:  {counter: 0,showCounter : true},
  reducers: {
    increment(state) { state.counter ++; },
    decrement(state) {state.counter --;},
    increase(state, action) { state.counter = state.counter + action.amount },
    toggle(state) {state.showCounter =  !state.showCounter },
  }
  })



// const store = createStore(counterSlice.reducer);

const store = configureStore({
  reducer: counterSlice.reducer
})

export default store; 