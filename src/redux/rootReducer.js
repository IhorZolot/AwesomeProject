// import { combineReducers } from '@reduxjs/toolkit';
import { authReducer } from './authSlice';
import { comentsReducer } from './comentsSlise';
import { postsReducer } from './postsSlice';

const rootReducer = {
  posts: postsReducer, 
  auth: authReducer,
  coments: comentsReducer,
};
export default rootReducer;
