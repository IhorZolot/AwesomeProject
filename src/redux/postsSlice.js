import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  posts: [], 
};
const slice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPosts: (state, {payload}) => {
      state.posts = payload;
    },
    // addPost: (state, {payload}) => {
    //   state.posts.push(payload);
    // },
  },
});

export const { setPosts } = slice.actions;
export const postsReducer =  slice.reducer;
