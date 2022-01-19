import { configureStore } from "@reduxjs/toolkit";

import counterReducer from './counter';
import authReducer from './auth'

// const store = createStore(counterSlice.reducer);

// const store = configureStore({
//   reducer: counterSlice.reducer
// })



const store = configureStore({
  reducer: { counter: counterReducer , auth : authReducer },
});


export default store;
