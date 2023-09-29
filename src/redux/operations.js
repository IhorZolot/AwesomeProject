import { createAsyncThunk } from '@reduxjs/toolkit'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { auth } from '../firebaseConfig'

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

