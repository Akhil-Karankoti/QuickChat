import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/users';
import messageReducer from './reducers/messages';

const store = configureStore({
  reducer: {
    userReducer,
    messageReducer
  }
})

export default store;