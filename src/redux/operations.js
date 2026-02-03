import { createAsyncThunk } from '@reduxjs/toolkit'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { auth, db } from '../firebaseConfig'
import { collection, getDocs } from 'firebase/firestore'
import { setPosts } from './postsSlice'

// Функція для реєстрації нового користувача
export const authSignUpUser = createAsyncThunk('auth/signUpUser', async ({ email, password },  thunkApi ) => {
	try {
		const {user} = await createUserWithEmailAndPassword(auth, email, password)
		return user
    } catch (error) {
			console.log(error)
      return thunkApi.rejectWithValue(error.message);
    }
})
// Функція для входу користувача
export const authLoginUser = createAsyncThunk('auth/loginUser', async ({ email, password }, thunkApi) => {
	try {
		const {user} = await signInWithEmailAndPassword(auth, email, password);
		return user
	} catch (error) {
		console.log(error)
		return thunkApi.rejectWithValue(error.message)
	}
})
// Функція для виходу користувача
export const authSingOutUser = createAsyncThunk('auth/singOutUser', async (_, thunkApi) => {
	try {
		await signOut(auth)
	} catch (error) {
		return thunkApi.rejectWithValue(error.message)
	}
})

export const getPosts = createAsyncThunk('post/getPosts', async (_, thunkApi) => {
	const querySnapshot = await getDocs(collection(db, 'posts'))
  const postsList = []
  try {
    querySnapshot.forEach((doc) => {
      postsList.push({ postId: doc.id, post: doc.data() })
			console.log('postsList',postsList)
    })
    thunkApi.dispatch(setPosts(postsList))
  } catch (error) {
    return thunkApi.rejectWithValue(error.message)
  }
})


// export const getNewPosts = () => {
//   return async (dispatch) => {
// 		const querySnapshot = await getDocs(collection(db, 'posts'))
//   const postsList = []
//   try {
//     querySnapshot.forEach((doc) => {
//       postsList.push({ postId: doc.id, post: doc.data() })
// 			console.log('postsList',postsList)
//     })
//     dispatch(setPosts(postsList))
//   } catch (error) {
// 		console.log('getPosts',error)
//     return thunkApi.rejectWithValue(error.message)
//   }
    
//   };
// };