// import { combineReducers } from '@reduxjs/toolkit';
import { authReducer } from './authSlice';
import { postsReducer } from './postsSlice';

const rootReducer = {
  posts: postsReducer, 
  auth: authReducer,
};
export default rootReducer;
