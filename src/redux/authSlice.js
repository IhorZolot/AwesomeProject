import { createSlice } from '@reduxjs/toolkit';
import { authLoginUser, authSignUpUser, authSingOutUser } from './operations';
import { Alert } from 'react-native';
const initialState = {
	userId: null,
	nickname: null,
	email: null,
	stateChange: false,
	isLoggingIn: false,
	isLoggingOut: false,
}
const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setUser: (state, action) => {
			state.userId = action.payload.userId;
		  state.email = action.payload.email;
		},
		resetUser: (state) => {
		state.userId = null;
		state.email = null;
		},
		
	},
	extraReducers: builder => {
		builder
			.addCase(authSignUpUser.fulfilled, (state, action) => {
				console.log(action)
				state.userId = action.payload.uid;
				// state.userId = action.payload;
				// state.nickname = payload.displayName;
				state.email = action.payload.email;
				state.isLoggingIn = false;
			})
			.addCase(authSignUpUser.rejected, (state) => {
				console.log(state)
				Alert.alert('Неправильні облікові данні');

			})
			.addCase(authLoginUser.fulfilled, (state, action) => {
				state.userId = action.payload.uid;
				console.log('Даскаво просимо')
			})
			.addCase(authLoginUser.rejected, () => {
				Alert.alert('Неправильні облікові данні');
			})
			.addCase(authSingOutUser.fulfilled, state => {
				state.nickname = null;
				state.userId = null;
				state.stateChange = false;
				state.email = null;
			});
	},
});

export const authReducer = authSlice.reducer;
export const authActions =  authSlice.actions;
